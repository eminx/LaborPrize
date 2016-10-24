import { Meteor } from 'meteor/meteor'

Meteor.methods({
	createTask(title, desc) {
		check(title, String);
		check(desc, String);
		
		try {
			Tasks.insert({
				user_id: this.userId,
				title: title,
				description: desc,
				created_at: new Date()
			})
		} catch (err) {
			console.error(err.reason);
		}
	}
})