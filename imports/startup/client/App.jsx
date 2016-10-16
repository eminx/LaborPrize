import React, {Component} from 'react';
import {mount} from 'react-mounter'
import CreateTask from '../../ui/pages/CreateTask.jsx';
import CurrentJobs from '../../ui/pages/CurrentJobs.jsx';
import JoinLaborPrize from '../../ui/pages/JoinLaborPrize.jsx';
import Login from '../../ui/pages/Login.jsx';
import LoggedInNavBar from '../../ui/components/LoggedInNavBar.jsx';
import LoggedOutNavBar from '../../ui/components/LoggedOutNavBar.jsx';
import MyTasks from '../../ui/pages/MyTasks.jsx';
import Task from '../../ui/pages/Task.jsx';
import Style from '../../ui/layouts/Style.scss';
import SlideMenu from '../../ui/pages/SlideMenu.jsx';
import StartPage from '../../ui/pages/StartPage.jsx';

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
        } else
            return (
                <div>
                    <LoggedInNavBar/>
                    {content}
                </div>
            )
    }
});


FlowRouter.route(`/`, {
    action(){
        mount(MainLayout, {
            content: (<StartPage/>)
        })
    }
});

FlowRouter.route(`/Slide`, {
    action(){
        mount(MainLayout, {
            content: (<SlideMenu/>)
        })
    }
});

FlowRouter.route(`/create-task`, {
    action(){
        mount(MainLayout, {
            content: (<CreateTask />)
        })
    }
});


FlowRouter.route(`/jobs`, {
    action(){
        mount(MainLayout, {
            content: (<CurrentJobs />)
        })
    }
});

FlowRouter.route(`/join-labor-prize`, {
    action(){
        mount(MainLayout, {
            content: (<JoinLaborPrize />)
        })
    }
});

FlowRouter.route(`/login`, {
    action(){
        mount(MainLayout, {
            content: (<Login/>)
        })
    }
});


FlowRouter.route(`/my-tasks`, {
    action(){
        mount(MainLayout, {
            content: (<MyTasks />)
        })
    }
});

FlowRouter.route('/rankings', {
    action(){
        mount(Layout2, {
            content: (<Ranking/>)
        })
    }
});


FlowRouter.route('/task/:taskId', {
    action: function (params, queryParams) {
        mount(MainLayout, {
            content: (<Task {...params} />)
        })
    }
});
