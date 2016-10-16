/**
 * Created by Aymen on 2016-10-16.
 */
import React, {Component} from 'react';

export default class LoggedInNavBar extends Component {
    
    render(){
       return(
           <nav className="teal lighten-2">
               <ul className="nav nav-pills">
                   <li><a>Profile</a></li>
                   <li><a href="create-task">Create Task</a></li>
                   <li><a>Log Out</a></li>
               </ul>
           </nav>
       ) 
        
    }
}