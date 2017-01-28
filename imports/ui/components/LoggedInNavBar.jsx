import React, {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { composeWithTracker } from 'react-komposer';

function composer(props, onData) {
    const subscription = Meteor.subscribe('userInfo');
    if (subscription.ready()) {
        console.log(Meteor.user().profile.isCompany);
        const data = {
            ready: true,
            isCompany: Meteor.user().profile.isCompany
        };
        onData(null, data);
    }else {
        onData(null, {ready: false});
    }
}

export default class LoggedInNavBar extends Component {
    
    onSubmit(){
        Meteor.logout(function (err) {
          if(err){
            console.log(err);
          }else{
            Accounts.logout();
            window.location.reload();
          }
        });
    }
    myTasks(){
        FlowRouter.go("my-tasks");
        window.location.reload();
    }

    uploadSolutions(){
        FlowRouter.go("my-tasks");
        window.location.reload();
    }

    render() {
        return (
            <div>
                {this.props.ready ?
                    <div>
                        {this.props.isCompany ?
                            <nav className="teal lighten-2">
                                <ul className="nav nav-pills">
                                    <li><a>Profile</a></li>
                                    <li onClick={() => {this.myTasks()}}><a>Create Tasks</a></li>
                                    <ul className="right hide-on-med-and-down">
                                        <li onClick={() => {this.onSubmit()}}><a>Log Out</a></li>
                                    </ul>
                                </ul>
                            </nav> :
                            <nav className="teal lighten-2">
                                <ul className="nav nav-pills">
                                    <li><a>Profile</a></li>
                                    <li onClick={() => {this.uploadTasks()}}><a>Uploads Solutions</a></li>
                                    <ul className="right hide-on-med-and-down">
                                        <li onClick={() => {this.onSubmit()}}><a>Log Out</a></li>
                                    </ul>
                                </ul>
                            </nav>
                        }
                    </div> :
                    <div>
                    </div>
                }
            </div>
        )
    }
}
export default composeWithTracker(composer)(LoggedInNavBar);