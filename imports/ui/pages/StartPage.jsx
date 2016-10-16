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

            return (
                <h1>WELCOME TO LABORPRIZE</h1>
            );
        }
}