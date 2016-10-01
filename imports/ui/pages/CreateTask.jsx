import React, { Component } from 'react';

export default class CreateTask extends Component {
 	
	_createTask(e) {
		e.preventDefault();
		const form = e.target;
		const 
			taskTitle = form.task_title.value,
			taskDesc = form.task_description.value;
		Meteor.call('createTask', taskTitle, taskDesc);
	}

    render() {

        return (
          <div className="">
            <header>
              <h1>CreateTask</h1>
            </header> 

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