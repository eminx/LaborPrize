import React, {Component} from "react";
import Signup from '../../ui/pages/Signup.jsx';
import Login from './Login.jsx';
import MyTasks from './MyTasks.jsx';

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
                emails = this.state.emails,
                taskTitle = form.task_title.value,
                taskDesc = form.task_description.value;

            if (taskTitle.length > 5 && taskDesc.length > 30) {
                Meteor.call('createTask', taskTitle, taskDesc, emails, (error, response) => {
                    if (error) {
                        console.log(error);
                        Materialize.toast(error.reason, 4000);
                    } else {
                        Materialize.toast('Your task is successfully created!', 2000);
                    }
                });
                e.target.task_title.value = "";
                e.target.task_description.value = "";
                this.setState({
                    emails: []
                })
            }
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

    _removeEmail(i) {
        const emails = this.state.emails;
        emails.splice(i, 1);
        this.setState({
            emails: emails
        })
    }

    render() {
        return (
            <div className="container" style={{marginTop: '2em'}}>
                <div className="row">
                    
                    { Meteor.userId() ?
                        <div>
                            <div className="col s12 m6">
                                <h4>Create New Task</h4>
                                <form onSubmit={this._addEmail.bind(this)} className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6" style={{paddingLeft: 0}}>
                                            <input id="employee_email" name="employee_email" type="email"
                                                   className="validate" />
                                            <label>email</label>
                                        </div>

                                        <div className="col s3" style={{marginTop: '1rem'}}>
                                            <button className="waves-effect waves-light btn">add email</button>
                                        </div>
                                    </div>
                                </form>

                                <div className="col s12">
                                    {this.state.emails.map((email, i) => {
                                        return (
                                            <div className="chip" key={i}>
                                                <div className="flex-horizontal flex-align-center s3 m2">
                                                    <span>{email}</span>
                                                    <i onClick={this._removeEmail.bind(this, i)} className="close-icon material-icons">close</i>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <form onSubmit={this._createTask.bind(this)} className="">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="task-title" name="task_title" type="text" className="validate"/>
                                            <label htmlFor="task-title">Task Title</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12">
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

                            <div className="col s12 m6">
                                <MyTasks />
                            </div>
                            
                        </div>
                        :
                        <div>
                            <Signup />
                            <Login />
                        </div>
                    }
                </div>
            </div>


        );
    }
}