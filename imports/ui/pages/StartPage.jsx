import React, {Component} from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

// App component - represents the whole app
export default class StartPage extends Component {

    constructor() {
        super();
        this.state = {
            personChosen:false,
            isCompany: false
        };
    }


    handleJoinLaborPrize(e) {
        e.preventDefault();
        FlowRouter.redirect("/join-labor-prize");
    }

    handleLogin(e) {
        e.preventDefault();
        FlowRouter.redirect("/login");
    }

    handleCompany(e) {
        e.preventDefault();
        var personChosen = !this.state.personChosen;
        this.setState({personChosen: personChosen})
        var comany = !this.state.isCompany;
        this.setState({isCompany: comany});
    }

    handleAssignee(e) {
        e.preventDefault();
        var personChosen = !this.state.personChosen;
        this.setState({personChosen: personChosen})
    }

    render() {
        return (
            <div>
                { !Meteor.userId() ?
                    <div>
                        {this.state.personChosen == false ?
                            <div style={{marginLeft:500, marginTop:300}}>
                                <form onClick={this.handleCompany.bind(this)}>
                                    <button className="waves-effect waves-teal btn-flat">Company</button>
                                </form>
                                <form onClick={this.handleAssignee.bind(this)}>
                                    <button className="waves-effect waves-teal btn-flat">Assignee</button>
                                </form>
                            </div>
                            :
                            <div>
                                {this.state.isCompany == true ?
                                    <div>
                                        <Signup company = {this.state.isCompany}/>
                                    </div>
                                    :
                                    <div>
                                        <h1>LALA</h1>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    :
                    <div>
                        <h1>din mamma</h1>
                    </div>
                }
                </div>


        )
    }
}