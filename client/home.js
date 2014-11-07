Template.home.helpers({
    messages: function() {
        return Messages.find();
    }
});

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

    'DOMNodeInserted .messages': function(event) {
        var messages = $(event.target);
        messages.scrollTop(messages.prop('scrollHeight'));
    }
});