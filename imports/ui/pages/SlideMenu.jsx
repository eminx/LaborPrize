import React, { Component } from 'react';
// App component - represents the whole app
var Menu = require('react-burger-menu').nameOfAnimation;

export default class SlideMenu extends Component {

    showSettings(event) {
        event.preventDefault();
    }
    render(){
        return (

            <Menu>

            </Menu>
        );
    }
};
