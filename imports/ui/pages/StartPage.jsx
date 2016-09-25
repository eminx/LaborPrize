import React, { Component } from 'react';
// App component - represents the whole app
export default class StartPage extends Component {


    handleJoinLaborPrize(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="container">
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