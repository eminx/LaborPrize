import { Meteor } from 'meteor/meteor';

Meteor.methods({
    updateRankings(isAccepted) {
        console.log(isAccepted);
        check(isAccepted, Boolean);
        try {
            if (isAccepted) {
                Rankings.update({userId: this.userId},
                    {
                        $inc: {accepted: 1}
                    })

            } else {
                Rankings.update({userId: this.userId},
                    {
                        $inc: {declined: 1}
                    })
            }
        } catch (err) {
            console.error(err.reason)
        }
    },

    createRankings(companyName){
        try {
            Tasks.insert({
                user_id: this.userId,
                company_Name: companyName,
                accepted: 0,
                declined: 0,
                created_at: new Date()
            })
        } catch (err) {
            console.error(err.reason);
        }
    }

});

