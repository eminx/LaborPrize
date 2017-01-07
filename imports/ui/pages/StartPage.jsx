import React, {Component} from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

// App component - represents the whole app
export default class StartPage extends Component {


    handleJoinLaborPrize(e) {
        e.preventDefault();
        FlowRouter.redirect("/join-labor-prize");
    }

    handleLogin(e) {
        e.preventDefault();
        FlowRouter.redirect("/login");
    }

    render() {
        return (
            <div>
                { Meteor.userId() ?
                <div>
                    <h1>Logged In</h1>
                </div>
                    :
                    <div>
                        <Signup />
                        <Login />
                    </div>
                }

            </div>

        );
    }
}