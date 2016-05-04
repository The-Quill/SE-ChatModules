var core = require('./chat_modules/core');
var colors = require('colors');

var messageFormatting = {
    room: function(event) {
        return colors.green("[") +
            colors.bold.white(event.room_id) +
            colors.green(": ") +
            colors.bold.white(event.room_name) +
            colors.green("]");
    },
    user: function(event) {
        return colors.bold.yellow(event.user_name);
    },
    activity: function(string) {
        return colors.blue(string);
    },
    content: function(event) {
        return colors.green(event.content);
    },
    edited: function(event) {
        var maxStringLength = 25;
        var editedStringLength = Math.ceil(maxStringLength / 2);
        return colors.green(event.content.length > maxStringLength ? event.content.substring(0, editedStringLength) + "..." : event.content);
    },
    changedRoomName: function(event) {
        var name = event.content.substring(0, event.content.lastIndexOf(" /"));
        return colors.green("[") +
            colors.bold.white(event.room_id) +
            colors.green(": ") +
            colors.bold.white(name) +
            colors.green("]");
    },
    messageId: function(event) {
        return colors.green(event.message_id);
    },
    connection: function(event) {
        return colors.green("Connecting to ") + colors.bold.white(event.name);
    },
};
core.setMessageFormatting(messageFormatting);

core.start().then(function() {
    //whatever
});
