Template.home.helpers({
    messages: function() {
        return Messages.find();
    },
    onlineUsers: function() {
        return Meteor.users.find({ "status.online": true });
    }
});

var formatMessages = function() {
    var messages = $('.messages');
    messages.scrollTop(messages.prop('scrollHeight'));
    messages.css({
        'height': $(window).height() - 200 + 'px',
        'overflow': 'auto'
    });
};

Template.home.events({
    'submit form': function(event) {
        event.preventDefault();

        var text = event.target.message.value;
        event.target.message.value = '';

        Meteor.call('addMessage', {
            contents: text
        });

        return false;
    },

    'DOMNodeInserted .messages': formatMessages
});

Template.home.rendered = function() {
    $(window).resize();
};

Meteor.startup(function(){
    $(window).resize(formatMessages);
});