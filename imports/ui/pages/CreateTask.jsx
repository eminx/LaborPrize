import React, {Component} from "react";

export default class CreateTask extends Component {
 	
	_createTask(e) {
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
            	<div className="col s12 m4">
                    <form onSubmit={this._createTask} className="">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="task-title" name="task_title" type="text" className="validate"/>
                                <label htmlFor="task-title">Task Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="task-desc"  name="task_description" type="text" className="materialize-textarea validate">
                                </textarea>
                                <label htmlFor="task-desc">Task Description</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn">Create</button>
                        </div>
                    </form>
                </div>

          </div>
        );
  }
}