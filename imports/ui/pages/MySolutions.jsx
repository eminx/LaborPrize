import React, { Component } from 'react';
import { composeWithTracker } from 'react-komposer';

function composer(props, onData) {
    const subscription = Meteor.subscribe('getSolutions',props.taskId);
    if (subscription.ready()) {
        console.log(Solutions.find().fetch());
        const data = {
            ready: true,
            tasks: Solutions.find().fetch()
        };
        onData(null, data);
    } else {
        onData(null, {ready: false});
    }
    }

class MySolutions extends Component {

    render() {
        return (
            <div className="container">
                <h1>My Solutions</h1>
            </div>
        );
    }
};

export default composeWithTracker(composer)(MySolutions);