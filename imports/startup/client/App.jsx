import React, {Component} from 'react';
import {mount} from 'react-mounter'
import CreateTask from '../../ui/pages/CreateTask.jsx';
import LoggedInNavBar from '../../ui/components/LoggedInNavBar.jsx';
import LoggedOutNavBar from '../../ui/components/LoggedOutNavBar.jsx';
import MySolutions from '../../ui/pages/MySolutions.jsx';
import MyTasks from '../../ui/pages/MyTasks.jsx';
import StartPage from '../../ui/pages/StartPage.jsx';
import UploadSolutions from '../../ui/pages/UploadSolutions.jsx';
import Task from '../../ui/pages/Task.jsx';

App = React.createClass({
  render() {
    return (
      <div className="app-root">
        <div className="container">
          {this.props.content}
        </div>
      </div>
    );
  }
});


FlowRouter.route('/', {
    action(){
        mount(App, {
            content: (<StartPage/>)
        })
    }
});

FlowRouter.route('/my-tasks', {
    action(){
        mount(App, {
            content: (<CreateTask/>)
        })
    }
});

FlowRouter.route('/task/:taskId', {
    action(params, queryParams) {
        mount(App, {
            content: (<Task {...params} />)
        })
    }
});

FlowRouter.route('/solutions/:taskId', {
    action(params, queryParams) {
        mount(App, {
            content: (<MySolutions {...params} />)
        })
    }
});
