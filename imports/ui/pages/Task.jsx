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

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      emails: [],
      task_title: props.tasks ? props.tasks[0].title : '',
      task_desc: props.tasks ? props.tasks[0].description : ''
    }
  }

  _updateTask(e) {
    e.preventDefault();
    const name = e.target.task_title.value;
    const desc = e.target.task_desc.value;
    const taskId = this.props.tasks[0]._id;

    Meteor.call('updateTask', taskId, name, desc, (err, res) => {
      if (err) {
        Materialize.toast(err.reason, 4000);
      } else {
        Materialize.toast('Your task is successfully updated!', 2000);
        this.setState({isEdit: false});
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const task = nextProps.tasks[0];
    this.setState({
      task_title: task.title,
      task_desc: task.description
    })
    
    if (task && task.description && task.description.length > 0) { 
      this.setState({
        isEdit: false
      })
    }
  }

  _addEmail(e) {
    e.preventDefault();
    const form  = e.target;
    const email = form.employee_email.value;
    const name = form.employee_name.value;

    if (email !== '' || name !== '') {
      const emailState = this.state.emails;
      emailState.push({
        name: name,
        email: email
      });
      this.setState({emails: emailState})
      e.target.employee_name.value = '';;
      e.target.employee_email.value = '';
    }
  }

  _removeEmail(i) {
    const emails = this.state.emails;
    emails.splice(i, 1);
    this.setState({
      emails: emails
    });
  }

  _addAssignees() {
    const emails = this.state.emails;
    if (emails.length > 0) {
      const taskId = this.props.tasks[0]._id;
      Meteor.call('addAssignees', taskId, emails, (err, res) => {
        if (err) {
          Materialize.toast(err.reason, 4000);
        } else {
          this.setState({emails: []});
          Materialize.toast('Assignees are successfully added to the Task!', 2000);
        }
      });
    }
  }

  updateTitle(e) {
    this.setState({
      task_title: e.target.value
    })
  }

  updateDesc(e) {
    this.setState({
      task_desc: e.target.value
    })
  }
  
  render() {

    if (!this.props.ready) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )
    }

    const task = this.props.tasks[0] || null;
    const isEdit = this.state.isEdit;

    if (!task) {
      return null;
    }

    return (
      <div className="">      

          { isEdit
          ? <div className="row col s9">

              <div className="right-align">
                <a onClick={() => this.setState({isEdit: false})} className={'btn-floating btn-large waves-effect waves-light'}><i className="material-icons">close</i></a>
              </div>

              <form className="col s12" onSubmit={this._updateTask.bind(this)}>

                <div className='input-field col s12'>  
                  <input id="task-title" name="task_title" type="text" value={this.state.task_title} className="validate" onChange={this.updateTitle.bind(this)} autoFocus />
                  <label className='active' htmlFor="task-title">Task Title</label>
                </div>
                <div className='input-field col s12'>
                  <textarea id="task-desc" name="task_desc" value={this.state.task_desc} className="materialize-textarea" onChange={this.updateDesc.bind(this)} autoFocus />
                  <label className='active' htmlFor="task-desc">Task Description</label>
                </div>
                <div className='center-align'>
                  <button className="waves-effect waves-light btn" type="submit">Update</button>
                </div>
              </form>
            </div>
          
          : <div className="row">

              <div className="row right-align">
                <a onClick={() => this.setState({isEdit: true})} className={'btn-floating btn-large waves-effect waves-light'}><i className="material-icons">edit</i></a>
              </div>

              <div className="col s12">	
  		          <h1>{this.props.ready ? task.title : null}</h1>
              	<p>{this.props.ready ? task.description : null}</p>
              </div>

  	        </div>
          }

          { isEdit
          ? null
          : <div>
              <h3>Add Assignees</h3>
              <form onSubmit={this._addEmail.bind(this)} className="col s12">
                  <div className="row">
                      <div className="input-field col s10 m5" style={{paddingLeft: 0}}>
                          <input id="employee_name" name="employee_name" type="text"
                                 className="validate" />
                          <label htmlFor='employee_name' >full name</label>
                      </div>
                      <div className="input-field col s10 m5" style={{paddingLeft: 0}}>
                          <input id="employee_email" name="employee_email" type="email"
                                 className="validate" />
                          <label htmlFor='employee_email' >email</label>
                      </div>
                      <div className="col s12 m2" style={{marginTop: '1rem'}}>
                          <button type='submit' className="btn-floating"><i className="material-icons">add</i></button>
                      </div>
                  </div>
              </form>

              <div className="col s12">
                  {this.state.emails.map((obj, i) => {
                      return (
                          <div className="chip" key={i}>
                              <div className="flex-horizontal flex-align-center s3 m2">
                                  <span>{obj.name}: <span style={{color: '#3860a0'}}> {obj.email}</span></span>
                                  <i onClick={this._removeEmail.bind(this, i)} className="close-icon material-icons">close</i>
                              </div>
                          </div>
                      )
                  })}
              </div>

              <div className='center-align'>
                <button className="waves-effect waves-light btn" onClick={this._addAssignees.bind(this)} >Add Assignees</button>
              </div>
            </div>
          }

          { isEdit
          ? null
          : <div>
              <h3>Current Assignees</h3>

              <div>
                <ul className="s12 m12" >
                  {task && task.assignees ? task.assignees.map((ass, i) => {
                    return (
                        <div key={ass.assignee_email + i} className="card horizontal s12 m6">
                          <div className="card-image">
                            <img src="http://lorempixel.com/100/190/nature/6" />
                          </div>
                          <div className="card-stacked">
                            <div className="card-content">
                              <h5>{ass.assignee_name}</h5>
                              <p>{ass.assignee_email}</p>
                            </div>
                            <div className="card-action">
                              <a href="#">Accept</a>
                              <a href="#">Deny</a>
                            </div>
                          </div>
                        </div>
                      )
                  }) : null}
                </ul>
              </div>
            </div>
          }

          
      </div>
    );
  }
}

export default composeWithTracker(composer)(Task);