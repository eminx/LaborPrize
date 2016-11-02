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
      <div className="container">
        <header>
          <h1>MyTasks</h1>
          <ul>
          {this.props.ready ? this.props.tasks.map((task) => {
          	return (
	          	<li key={task._id}>
	          		<h3>{task.title}</h3>
	          		<p>{task.description}</p>
	          	</li>
	          )
          }) : null }

          </ul>
        </header> 
      </div>
    );
  }
});

export default composeWithTracker(composer)(MyTasks);