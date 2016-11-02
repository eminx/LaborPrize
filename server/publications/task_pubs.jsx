import { Meteor } from 'meteor/meteor';

Meteor.publish('task', function(taskId) {
	const currentUserId = this.userId;
	return Tasks.find({
		user_id: currentUserId,
		_id: taskId
	})
})

Meteor.publish(`my-tasks`, function() {
	return Tasks.find({
		user_id: this.userId
	})
})