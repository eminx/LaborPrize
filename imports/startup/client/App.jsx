
import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import {mount} from 'react-mounter'
import LoggedInNavBar from '../../ui/components/LoggedInNavBar.jsx';
import LoggedOutNavBar from '../../ui/components/LoggedOutNavBar.jsx';
import MySolutions from '../../ui/pages/MySolutions.jsx';
import MyTasks from '../../ui/pages/MyTasks.jsx';
import StartPage from '../../ui/pages/StartPage.jsx';
import UploadSolutions from '../../ui/pages/UploadSolutions.jsx';
import Task from '../../ui/pages/Task.jsx';
import CurrentPositions from '../../ui/pages/CurrentPositions.jsx';
import Header from '../../ui/components/Header.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends Component {
    render () {
        return (
            <div className="app-root">
                <div className="">
                    {this.props.header}
                </div>
                <div className="container">
                    {this.props.content}
                </div>
            </div>
        );
    }
}


FlowRouter.route('/', {
    action(){
        mount(App, {
            content: (<StartPage />)
        })
    }
});

FlowRouter.route('/my-tasks', {
    action(){
        mount(App, {
            content: (<MyTasks />),
            header: (<Header />)
        })
    }
});

FlowRouter.route('/open-positions', {
    action(){
        mount(App, {
            content: (<CurrentPositions />),
            header: (<Header />)
        })
    }
});


FlowRouter.route('/task/:taskId', {
    action(params, queryParams) {
        mount(App, {
            content: (<Task {...params} />),
            header: (<Header />)
        })
    }
});

FlowRouter.route('/solutions/:taskId', {
    action(params, queryParams) {
        mount(App, {
            content: (<MySolutions {...params} />),
            header: (<Header />)
        })
    }
});
