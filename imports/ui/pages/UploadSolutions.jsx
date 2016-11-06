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

    _uploadTask(e){
        e.preventDefault();
        const form = e.target;
        console.log(form.uploaded_file.value);
        console.log("whaat but");
    }

    
    render() {
        return (
            <div className="">
                <form onSubmit={this._uploadTask} className="">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" id ="uploaded_file" name="uploaded_file"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn">Upload</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}