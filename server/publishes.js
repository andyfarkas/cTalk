Meteor.publish('messages', function(){
    return Messages.find();
});

Meteor.publish("onlineUsers", function() {
    return Meteor.users.find({ "status.online": true }, {
        "username": 1,
        "status.lastLogin": 1
    });
});