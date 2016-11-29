import React, {Component} from "react";
import Signup from '../../ui/pages/Signup.jsx';
import Login from './Login.jsx';

export default class CreateTask extends Component {

    constructor(){
        super();
        this.state ={
            emails:[]
        };
    }

    _createTask(e) {
        e.preventDefault();
        const form = e.target;
        if(form.task_title == null && form.task_description == null){
            return null;
        }
        else {
            const
                taskTitle = form.task_title.value,
                taskDesc = form.task_description.value;

            Meteor.call('createTask', taskTitle, taskDesc, this.state.emails, (error, response) => {
                if (error) {
                    console.log(error);
                    Materialize.toast(error.reason, 4000);
                }
            });
            e.target.task_title.value = "";
            e.target.task_description.value = "";
        }
    }

    _addEmail(e) {
        e.preventDefault();
        const form  = e.target;
        const email = form.employee_email.value;
        const emailState = this.state.emails;
        emailState.push(email);
        this.setState({emails:emailState});
        e.target.employee_email.value = "";
    }

    render() {
        return (
            <div className="">
                {Meteor.userId() ?
                    <div className="col s12 ">
                        <form onSubmit={this._createTask.bind(this)} className="">
                            <form onSubmit={this._addEmail.bind(this)} className="">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="employee_email" name="employee_email" type="text" className="validate"/>
                                    <label>email</label>
                                </div>
                                    <button className="waves-effect waves-light btn">add email</button>
                                </div>
                            </form>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="task-title" name="task_title" type="text" className="validate"/>
                                    <label htmlFor="task-title">Task Title</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <textarea id="task-desc" name="task_description" type="text"
                                              className="materialize-textarea validate">
                                    </textarea>
                                    <label htmlFor="task-desc">Task Description</label>
                                </div>
                            </div>

                            <div className="row">
                                <button className="waves-effect waves-light btn">Create</button>
                            </div>
                        </form>
                    </div>
                    :
                    <div>
                        <Signup />
                        <Login />
                    </div>
                }
            </div>
        );
    }
}