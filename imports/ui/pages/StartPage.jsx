import React, {Component} from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

export default class StartPage extends Component {

    constructor() {
        super();
        this.state = {
            isCompany: null
        };

        const user = Meteor.user();
        if (user) {
            if (user.profile.isCompany) {
               FlowRouter.go('/my-tasks');
            } else {
               FlowRouter.go('/open-positions');
            }
        }
    }

    render() {
        return (
            <div>
                { this.state.isCompany === null
                ?
                    <div style={{marginLeft:500, marginTop:300}}>
                        <button onClick={() => this.setState({isCompany: true})} className="waves-effect waves-teal btn-flat">Company</button>
                        <button onClick={() => this.setState({isCompany: false})} className="waves-effect waves-teal btn-flat">Assignee</button>
                    </div>
                :
                    <div>
                        <Signup company = {this.state.isCompany}/>
                        <Login/>
                    </div>
                }
            </div>
        )
    }
}