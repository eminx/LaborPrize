/**
 * Created by Aymen on 2016-10-16.
 */
import React, {Component} from 'react';

export default class LoggedOutNavBar extends Component {

    render(){
        return(
            <nav className="teal lighten-2">
                <ul className="nav nav-pills">
                    <li><a>Login</a></li>
                    <li><a>Join Laborprize</a></li>
                </ul>
            </nav>
        )
    }
}