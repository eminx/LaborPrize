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
                console.log("u got declined")
                Rankings.update({userId: this.userId},
                    {
                        $inc: {declined: 1}
                    })
            }
        } catch (err) {
            console.error(err.reason)
        }
    }
})

