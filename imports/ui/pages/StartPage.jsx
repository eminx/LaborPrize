import React, { Component } from 'react';
// App component - represents the whole app
export default class StartPage extends Component {


    handleJoinLaborPrize(e){
        e.preventDefault();
        FlowRouter.redirect("/join-labor-prize");
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Main Page</h1>
                </header>
                <form onSubmit = {this.handleJoinLaborPrize}>
                    <button>Login</button>
                    <br/>
                    <br/>
                    <button>Join Labor-prize</button>
                </form>
            </div>
        );
    }
}