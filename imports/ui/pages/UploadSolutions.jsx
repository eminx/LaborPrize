import React, { Component } from 'react';

export default class UploadSolutions extends Component {

    _createSolutions(e) {
        e.preventDefault();
        const form = e.target;
        const
            taskTitle = form.task_title.value,
            taskDesc = form.task_description.value;
        Meteor.call('createTask', taskTitle, taskDesc, (error, response) => {
            if (error) {
                console.log(error);
                Materialize.toast(error.reason, 4000);
            }
        });
        e.target.task_title.value = "";
        e.target.task_description.value = "";
    }
    
    render() {
        return (
            <div className="">
                <header>
                    <h1>UploadSolutions</h1>
                </header>
            </div>
        );
    }
}