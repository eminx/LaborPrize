import React, { Component } from 'react';

Rankings = new Mongo.Collection("rankings");
 
// App component - represents the whole app
export default class Ranking extends Component {
 
 	handleSubmit(e){
		e.preventDefault();
 		console.log("u accepted")
 	}
 	handeDecline(e){
 		e.preventDefault();
	 	console.log("u declined")
 	}
  
  render() {
    return (
      <div className="container">
      		<form onSubmit = {this.handleSubmit}>
      		<button>Accept</button>
      		</form>
      	<br/>		
      		<form onSubmit = {this.handeDecline}>	
     		 <button>Decline</button>
     		 </form>
      </div>
    );
  }
}