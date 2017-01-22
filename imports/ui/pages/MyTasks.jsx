import React, { Component } from 'react';
import { composeWithTracker } from 'react-komposer';

function composer(props, onData) {
  const subscription = Meteor.subscribe('my-tasks');
  if (subscription.ready()) {
    console.log(Tasks.find().fetch());
    const data = {
      ready: true,
      tasks: Tasks.find().fetch()
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

const MyTasks = React.createClass({ 

  render() {
    return (
      <div className="">
        <h4>MyTasks</h4>
        <ul className="">
          {this.props.ready ? this.props.tasks.map((task) => {
            const taskRoute = '/task/' + task._id;

          	return (
            	<li key={task._id} className="card blue-grey darken-2" onClick={() => FlowRouter.go(taskRoute)} style={{cursor: 'pointer'}}>
            		<div className="card-content white-text">
                        <span className="new badge">4</span>
                        <span className="card-title">{task.title}</span>
                        <p>{task.description}</p>
                    </div>

                    <div className="card-action">
                        <a href="#">Edit</a>
                        <a href="#">Archive</a>
                    </div>
            	</li>
            )
          }) : null }

        </ul>
      </div>
    );
  }
});

export default composeWithTracker(composer)(MyTasks);