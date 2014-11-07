Template.message.helpers({
    postedAtFormatted: function() {
        return moment(this.createdAt).format('DD.MM HH:mm');
    }
});