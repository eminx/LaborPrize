import { Meteor } from 'meteor/meteor';

Meteor.publish(`task`, (taskId) => {
	return Tasks.find({
		_id: taskId
	})
})