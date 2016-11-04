import { Meteor } from 'meteor/meteor';


Meteor.publish('getSolutions', function(taskId) {
    const currentUserId = this.userId;
    return Solutions.find({
        companyId: currentUserId,
        _id: taskId
    })
});