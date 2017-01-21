Meteor.publish('userInfo', function() {
    return Meteor.users.find({_id : this.userId});
});