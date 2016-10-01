import React, {Component} from 'react';
import { Mongo } from 'meteor/mongo'

// Rankings = new Mongo.Collection("rankings");
 
// App component - represents the whole app
export default class Ranking extends Component {
 
 	handleSubmit(e){
		e.preventDefault();
 		console.log("u accepted")
 	}
 	handelDecline(e){
 		e.preventDefault();
	 	console.log("u declined")
 	}
  
  render() {
    return (
      <div className="">
      		<form onSubmit = {this.handleSubmit}>
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