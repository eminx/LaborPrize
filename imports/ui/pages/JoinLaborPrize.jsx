import React, {Component} from 'react';
// App component - represents the whole app
export default class JoinLaborPrize extends Component {

    onSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        var ele = $(e.target);
        var companyName = ele.find("#company_name").val();
        var email = ele.find("#email").val();
        var username = ele.find("#username").val();
        var password = ele.find("#password").val();
        var confirmPassword = ele.find("#confirmPassword").val();

        if (password === confirmPassword && password !== "" && confirmPassword !== "") {

            var accountInfo = {
                companyName: companyName,
                username: username,
                password: password
            };
            Accounts.createUser(accountInfo, function (er) {
                if (er) {
                    Materialize.toast('Error!', 4000);
                }
                else {
                    Meteor.loginWithPassword(username, password, function (er) {
                        if (er) {
                            Materialize.toast('Error!', 4000);
                        } else {
                            console.log("success");
                        }

                    })
                }
            });
        } else {
            Materialize.toast('passwords don¨t match!', 4000) // 4000 is the duration of the toast

        }
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit} className="col offset-s4 s4">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="company_name" type="text" class="validate"/>
                            <label htmlFor="company_name">Company Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="text" class="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" class="validate"/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" class="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="confirmPassword" type="password" class="validate"/>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn">Join</button>
                    </div>
                </form>
            </div>
        );
    }
}