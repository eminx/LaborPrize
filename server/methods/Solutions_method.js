import { Meteor } from 'meteor/meteor'

Meteor.methods({uploadSolutions(link) {
        const companyId = Meteor.userId();
        try {
            Solutions.insert({
                companyId: companyId,
                solution_link: link,
                created_date: new Date()
            })
        } catch (err) {
            console.error(err.reason);
        }
    }
});