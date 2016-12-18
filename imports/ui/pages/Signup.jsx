import React, {Component} from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {

    onSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        var ele = $(e.target);
        console.log(ele);
        var companyName = ele.find("#company_name").val();
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
                    console.log(er);
                    Materialize.toast(er.reason, 4000);
                }
                else {
                    window.location.reload();
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
                            {/*<i className="material-icons prefix">account_circle</i>*/}
                            <input id="company_name" type="text" className="validate"/>
                            <label htmlFor="company_name">Company Name</label>
                        </div>
                    </div>
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
                        <div className="input-field col s12">
                            <input id="confirmPassword" type="password" className="validate"/>
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