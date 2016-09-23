import React, {Component} from 'react';
import { Mongo } from 'meteor/mongo'


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

const PersonSchema = new SimpleSchema({
    name: {
        type: String,
        min: 3,
        max: 50
    },
    age: {
        type: Number,
        min: 0,
        max: 150
    }
});

obj = {name: "BigBoss", age: 23};

check(obj, PersonSchema);

Rankings.attachSchema(PersonSchema);
