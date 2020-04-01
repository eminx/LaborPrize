import React, { Component } from 'react';

export default class Header extends Component {

	_goto(link) {
		FlowRouter.go(link);
	}

	render() {
		return (
			<nav>
			  <div className="container nav-wrapper">
			    <a className="brand-logo" onClick={this._goto.bind(this, '/my-tasks')} >LaborPrize</a>
			    <ul id="nav-mobile" className="right hide-on-large">
			    	<li><a>Tasks</a></li>
			    </ul>
 			    <ul id="nav-desktop" className="right hide-on-med-and-down">
			      <li onClick={this._goto.bind(this, '/my-tasks')} ><a>Tasks</a></li>
			      <li onClick={this._goto.bind(this, '/current-positions')} ><a>Jobs</a></li>
			      <li onClick={this._goto.bind(this, '/')} ><a>My Profile</a></li>
			    </ul>
			  </div>
			</nav>
		)
	}
}