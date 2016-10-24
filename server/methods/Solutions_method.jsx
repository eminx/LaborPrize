import { Meteor } from 'meteor/meteor'

Meteor.methods({
    createSolutions(taskId, companyId, link) {
        check(taskId, String);
        check(companyId, String);
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