import { Meteor } from 'meteor/meteor';

Meteor.methods({
	createTask(title, desc, assigneeEmails) {
		check(desc, String);
		check(assigneeEmails, Array);
		check(title, String);
		try {
			Tasks.insert({
				user_id: this.userId,
				title: title,
				description: desc,
				assignee_emails:assigneeEmails,
				created_at: new Date()
			});
			// console.log(title, desc, assigneeEmails);
		} catch (err) {
			console.error(err.reason);
			return err;
		}
	}
});