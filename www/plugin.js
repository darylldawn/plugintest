var exec = require("cordova/exec");

var PLUGIN_NAME = "PluginTest";

var PluginTest = {
    echo: function(phrase, cb) {
        exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
    }
};

module.exports = PluginTest;