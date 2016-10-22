import React, { Component } from 'react';
import { composeWithTracker } from 'react-komposer';

function composer(props, onData) {
  const subscription = Meteor.subscribe('task', props.taskId);
    if (subscription.ready()) {
        const data = {
      ready: true,
      tasks: Tasks.find({_id: props.taskId}).fetch()
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

const Task = React.createClass({
  render() {

    return (
      <div className="">
	        <header>

	        </header> 

        	<div className="col s12 m4">
		        	<div className="row">
			            <div className="input-field col s12">
				            <h1>{this.props.ready ? this.props.tasks[0].title : null}</h1>
			            </div>
			        </div>
	            <div className="row">
	                <div className="input-field col s12">
	                	<p>{this.props.ready ? this.props.tasks[0].description : null}</p>
	                </div>
	            </div>
	        </div>
      </div>
    );
  }
});

export default composeWithTracker(composer)(Task);