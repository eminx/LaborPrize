import React, {Component} from 'react';
import { Mongo } from 'meteor/mongo'

// Rankings = new Mongo.Collection("rankings");
 
// App component - represents the whole app
export default class Ranking extends Component {

	handleAccept(e){
		e.preventDefault();

		// const		const accept = true;
		Meteor.call('updateRankings', accept, (error, response) => {
			if (error) {
				console.log(error);
				Materialize.toast(error.reason, 4000);
			}
		});
		// 	rankAccept = form.
 		// console.log("u accepted")
 	}

 	handelDecline(e){
		const decline = false;
		Meteor.call('updateRankings', decline, (error, response) => {
			if (error) {
				console.log(error);
				Materialize.toast(error.reason, 4000);
			}
		});
 	}
  
  render() {
    return (
      <div className="">
      		<form onSubmit = {this.handleAccept}>
      		<button>Accept</button>
      		</form>
      	<br/>		
      		<form onSubmit = {this.handelDecline}>	
     		 <button>Decline</button>
     		 </form>
      </div>
    );
  }
}