import React, { Component } from 'react';
import { composeWithTracker } from 'react-komposer';

function composer(props, onData) {
  const subscription = Meteor.subscribe('my-tasks');
  if (subscription.ready()) {
    const data = {
      ready: true,
      tasks: Tasks.find().fetch()
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

class MyTasks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false
    }
  }

  _createTask(e) {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.task_title.value;
    if (taskTitle.length > 5) {
        Meteor.call('createTask', taskTitle, (error, response) => {
          if (error) {
            Materialize.toast(error.reason, 4000);
          } else {
            Materialize.toast('Your task is successfully created!', 2000);
            FlowRouter.go(`/task/${response}`);
          }
        });
        e.target.task_title.value = "";
        const task = Tasks.findOne({title: taskTitle}) || null;
        task ? FlowRouter.go(`/task/${task._id}`) : null;
    }
  }

  render() {

    let buttonScale = 'addtask-button_holder scale-transition';
    let formScale = 'addtask-form_holder scale-transition scale-out';
    if (this.state.isFormOpen) {
      buttonScale += ' scale-out';
      formScale += ' scale-in';
    }

    return (
      <div className="row col s12">
        
        <div className='clearfix'>
          <div className={buttonScale}>
            <h3 style={{textAlign: 'center'}}>Create a New Task</h3>
            <div className="s12" style={{textAlign: 'center'}} >
              <a onClick={() => this.setState({isFormOpen: true})} className={'text-align-center btn-floating btn-large waves-effect waves-light red'}><i className="material-icons">add</i></a>
            </div>
          </div>

          <div className={formScale} style={{textAlign: 'center', backgroundColor: '#f3f3f3', padding: '1em'}}  >
            <div className='right-align link'><i onClick={() => this.setState({isFormOpen: false})} style={{fontSize: '3rem'}} className='material-icons'>close</i></div> 
            <h3>Enter the Title</h3>
            <p>You will be able to enter more details afterwards</p>
            <form onSubmit={this._createTask.bind(this)} className="clearfix">
              <div className="row">
                  <div className="input-field col s12">
                      <input id="task-title" name="task_title" type="text" style={{textAlign: 'center'}} className="validate"/>
                      <label htmlFor="task-title">Task Title</label>
                  </div>
              </div>

              <div className="row">
                <button className="waves-effect waves-light btn" type="submit">Create and Go</button>
              </div>
            </form>
          </div>

        </div>
        
        <h3>MyTasks</h3>
        <ul className="">
          {this.props.ready ? this.props.tasks.map((task) => {

          	return (
            	<li key={task._id} className="card blue-grey darken-2" onClick={() => FlowRouter.go(`/task/${task._id}`)} style={{cursor: 'pointer'}}>
            		<div className="card-content white-text">
                        <span className="new badge">4</span>
                        <span className="card-title">{task.title}</span>
                        <p>{task.description}</p>
                    </div>

                    <div className="card-action">
                        <a href="#">Edit</a>
                        <a href="#">Archive</a>
                    </div>
            	</li>
            )
          }) : null }

        </ul>
      </div>
    );
  }
};

export default composeWithTracker(composer)(MyTasks);

