import React, {Component} from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {

    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        const ele = e.target;
        console.log(e);
        const companyName = ele.companyName.value || null;
        const username = ele.userName.value;
        const password = ele.passWord.value;
        const confirmPassword = ele.confirmPassword.value;

        const isCompany = this.props.company;
        
        if (password === confirmPassword && password !== "") {
            let accountInfo = {
                username: username,
                password: password,
                profile:{
                    isCompany: this.props.company
                }
            };

            this.props.company ? accountInfo.profile.company_name = companyName : null;

            Accounts.createUser(accountInfo, (er) => {
                if (er) {
                    console.log(er);
                    Materialize.toast(er.reason, 4000);
                } else {
                    Materialize.toast('Your account successfully created!');
                    FlowRouter.go('/my-tasks');
                }
            });
        } else {
            Materialize.toast('passwords don¨t match!', 4000) // 4000 is the duration of the toast

        }
    }

    render() {
        return (
        <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s12">
                    { this.props.company
                    ?
                        <div className="row">
                            
                            <div className="input-field col s12">
                                {/*<i className="material-icons prefix">account_circle</i>*/}
                                <input name="companyName" id="company_name" type="text" className="validate"/>
                                <label htmlFor="company_name">Company Name</label>
                            </div> 
                        </div>
                    : null
                    }
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="userName" id="username" type="email" className="validate"/>
                            <label htmlFor="username">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="passWord" id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="confirmPassword" id="confirm_password" type="password" className="validate"/>
                            <label htmlFor="confirm_password">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" className="waves-effect waves-light btn">Join</button>
                    </div>
                </form>
            </div>
        );
    }
}
