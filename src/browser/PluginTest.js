var browser = require('cordova/platform');

window.PluginTest = window.PluginTest || {};

module.exports.echo = window.PluginTest.echo = function (message, callback) {
    window.alert(message);
    if (callback) {
        callback();
    }
};