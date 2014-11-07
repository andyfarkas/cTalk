Template.message.helpers({
    postedAtFormatted: function() {
        return moment(this.postedAt).format('DD.MM HH:MM');
    }
});