import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import { composeWithTracker } from 'react-komposer';

function composer(props, onData) {
    const subscription = Meteor.subscribe('userInfo');
    if (subscription.ready()) {
        console.log(Meteor.user().profile.isCompany);
        const data = {
            ready: true,
            userIsCompany: Meteor.user().profile.isCompany
        };
        onData(null, data);
    } else {
        onData(null, {ready: false});
    }
}

export default class StartPage extends Component {

    constructor() {
        super();
        this.state = {
            personChosen:false,
            isCompany: false
        };
    }

    componentWillReceiveProps(){
        if(this.props.ready){
            console.log(this.props.user);
        }
    }

    handleCompany(e) {
        e.preventDefault();
        var personChosen = !this.state.personChosen;
        this.setState({personChosen: personChosen});
        var companyState = !this.state.isCompany;
        this.setState({isCompany: companyState});
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
                        {!this.state.personChosen ?
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
                                {this.props.userIsCompany ?
                                    <div>
                                        <Signup company={this.state.isCompany}/>
                                        <Login/>
                                    </div>
                                    :
                                    <div>
                                        <Signup company={this.state.isCompany}/>
                                        <Login/>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    :
                    <div>
                        {this.props.ready ?
                            <div>
                                {this.props.userIsCompany == true ?
                                    <div>
                                        <h1>Welcome {Meteor.user().username}</h1>
                                    </div>
                                    :
                                    <div>
                                        <h1>Welcome {Meteor.user().username}</h1>
                                    </div>
                                }
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}
export default composeWithTracker(composer)(StartPage);