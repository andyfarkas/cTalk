Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'home',
    waitOn: function() {
        return [
            Meteor.subscribe('messages'),
            Meteor.subscribe('onlineUsers')
        ];
    }
});