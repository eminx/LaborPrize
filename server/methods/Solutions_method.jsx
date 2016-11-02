import { Meteor } from 'meteor/meteor'

Meteor.methods({
    createSolutions(taskId, link) {
        check(taskId, String);
        const companyId = Meteor.userId();
        try {
            Solutions.insert({
                taskId: taskId,
                companyId: companyId,
                solution_link: link,
                created_date: new Date()
            })
        } catch (err) {
            console.error(err.reason);
        }
    }
});