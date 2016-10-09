import React, { Component } from 'react';
// App component - represents the whole app
export default class StartPage extends Component {


    handleJoinLaborPrize(e){
        e.preventDefault();
        FlowRouter.redirect("/join-labor-prize");
    }

    handleLogin(e){
        e.preventDefault();
        FlowRouter.redirect("/login");
    }
    render() {
        if (Meteor.userId()) {
            return (
                <div>
                    <header>
                        <h1>Main Page</h1>
                    </header>
                    <form onSubmit={this.handleLogin}>
                        <button>Login</button>
                    </form>
                    <form onSubmit={this.handleJoinLaborPrize}>
                        <button>Join Labor-prize</button>
                    </form>
                </div>

            );
        }
        else{
            return(
                <h1>
                    You are not logged in!
                </h1>
            )
        }
    }
}