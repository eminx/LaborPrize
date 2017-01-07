import { Meteor } from 'meteor/meteor'

Meteor.methods({
    uploadSolutions(link) {
        const userId = Meteor.userId();
        try {
            Solutions.insert({
                // task_id: 
                // company_id: companyId,
                // assignee_name: ,
                assignee_id: userId,

                solution_link: link,
                created_date: new Date()
            })
        } catch (err) {
            console.error(err.reason);
        }
    }
});