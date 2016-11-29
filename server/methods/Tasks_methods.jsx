import { Meteor } from 'meteor/meteor';

Meteor.methods({
	createTask(title, desc, employeeEmails) {
		check(desc, String);
		check(employeeEmails, Array);
		check(title, String);
		try {
			Tasks.insert({
				user_id: this.userId,
				title: title,
				description: desc,
				employee_email:employeeEmails,
				created_at: new Date()
			});
		} catch (err) {
			console.error(err.reason);
			return err;
		}
	}
});