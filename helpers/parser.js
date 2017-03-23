var _ = require('./underscore.js');

var parser = {
	getCommand: function(string) {
		if (_.isString(string) && !_.isEmpty(string)) {
			var parts = string.split(' ');
			var command = parts[0];

			// Run regex texting
			var lastMatchesTest = new RegExp('last[0-9]+matches');
			var passesRegex = lastMatchesTest.test(command);

			var validCommands = ['lastmatch'];

			if (_.contains(validCommands, command) || passesRegex) {
				return command;
			}
		}
		return undefined;
	},
	getParameters: function(string) {
		if (_.isString(string) && !_.isEmpty(string)) {
			var parts = string.split(' ');
			return _.without(parts, parts[0]);
		}
		return undefined;
	}
};

module.exports = parser;