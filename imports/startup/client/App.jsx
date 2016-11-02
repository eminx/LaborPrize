import React, {Component} from 'react';
import {mount} from 'react-mounter'
import CreateTask from '../../ui/pages/CreateTask.jsx';
import CurrentJobs from '../../ui/pages/CurrentJobs.jsx';
import Signup from '../../ui/pages/Signup.jsx';
import Login from '../../ui/pages/Login.jsx';
import LoggedInNavBar from '../../ui/components/LoggedInNavBar.jsx';
import LoggedOutNavBar from '../../ui/components/LoggedOutNavBar.jsx';
import MyTasks from '../../ui/pages/MyTasks.jsx';
import Rankings from '../../ui/pages/Rankings.jsx';
import Style from '../../ui/layouts/Style.scss';
import SlideMenu from '../../ui/pages/SlideMenu.jsx';
import StartPage from '../../ui/pages/StartPage.jsx';
import Task from '../../ui/pages/Task.jsx';

// App component - represents the whole app
const MainLayout = ({content}) => ({
    render(){
        if (!Meteor.userId()) {
            return (
                <div>
                <LoggedOutNavBar/>
            {content}
           </div>
            )
        } else {
            return (
                <div>
                    <LoggedInNavBar/>
                    {content}
                </div>
            )
        }
    }
});


FlowRouter.route(`/`, {
    action(){
        mount(MainLayout, {
            content: (<StartPage/>)
        })
    }
});

FlowRouter.route(`/my-tasks`, {
    action(){
        mount(MainLayout, {
            content: (<MyTasks/>)
        })
    }
});

FlowRouter.route(`/create-task`, {
    action(){
        mount(MainLayout, {
            content: (<CreateTask/>)
        })
    }
});


FlowRouter.route('/task/:taskId', {
    action(params, queryParams) {
        mount(MainLayout, {
            content: (<Task {...params} />)
        })
    }
});
