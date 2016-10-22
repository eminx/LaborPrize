import React, {Component} from 'react';


export default class MyTasks extends Component {

    onSubmit(e) {
        e.preventDefault();
        var el = $(e.target);
        var username = el.find("#username").val();
        var password = el.find("#password").val();


        Meteor.loginWithPassword(username, password, (er)=> {
            if (er) {
                console.log(er);
                Materialize.toast(er.reason, 4000);
            }
            else {
                FlowRouter.redirect("/");
            }

        });
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit} className="col offset-s4 s4">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate"/>
                            <label htmlFor="username">Username/Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn">login</button>
                    </div>
                </form>
            </div>
        );
    }
}