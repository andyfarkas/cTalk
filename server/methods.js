Meteor.methods({
    addMessage: function(message) {
        if (!Meteor.user()) {
            throw new Error('Login required.');
        }
        message.createdAt = new Date();
        message.owner = Meteor.userId();
        message.username = Meteor.user().username;
        Messages.insert(message);
    }
});