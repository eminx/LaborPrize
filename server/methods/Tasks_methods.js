import { Meteor } from 'meteor/meteor';

Meteor.methods({
	createTask(title) {
		// check(desc, String);
		// check(assigneeEmails, Array);
		check(title, String);
		try {
			const newTask = Tasks.insert({
				user_id: this.userId,
				title: title,
				// description: desc,
				// assignee_emails:assigneeEmails,
				created_at: new Date()
			});
			return newTask;
		} catch (err) {
			console.error(err.reason);
			return err;
		}
	},

	updateTask(taskId, title, desc) {
		check(taskId, String);
		check(title, String);
		check(desc, String);
		try {
			Tasks.update(taskId, {
				$set: {
					title: title,
					description: desc
				}
			})
		} catch (err) {
			console.error(err.reason);
			return err;
		}
	},

	addAssignees(taskId, emails) {
		check(taskId, String);
		check(emails, Array);

		let mails = []
		for (let e of emails) {
			const date = new Date();
			mails.push({
				assignee_email: e.email,
				assignee_name: e.name,
				invitation_date: date
			})
		}

		try {
			Tasks.update(taskId, {
				$push: {
					assignees: {
						$each: mails
					}
				}
			})
		} catch (err) {
			console.error(err.reason);
			return err;
		}
	}

});