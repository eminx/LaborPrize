/**
 * Created by Aymen on 2016-10-16.
 */
import React, {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

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




    render(){
     return(
         <nav className="teal lighten-2">
             <ul className="nav nav-pills">
                 <li><a>Profile</a></li>
                 <li onClick={() => {this.myTasks()}}><a>Tasks</a></li>
                 <li onClick = {() => {this.onSubmit()}}><a>Log Out</a></li>
             </ul>
         </nav>
     ) 
      
  }
}