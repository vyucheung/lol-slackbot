var request = require('request-promise');
var _ = require('../helpers/underscore.js');
var constants = require('../helpers/constants.js')

var urlPrefix = 'https://na.api.riotgames.com/api/lol/NA/';
var urlSuffix = '?api_key=' + process.env.LOL_API_KEY;

var model = {
	getSummonerIDs: function(summonerNames) {
		var summonerIDsByName = urlPrefix +
			'v1.4/summoner/by-name/' +
			summonerNames +
			urlSuffix;

		request(
			summonerIDsByName
		).then( function(
			summoners
		) {
			summoners = JSON.parse(summoners);
			var summonerIDs = _.map(summoners, function(summoner, name) {
				return summoner.id;
			});
			return summonerIDs;
		}).catch(function(err) {
			throw new Error(constants.riot_api_error);
		});
	}
};

module.exports = model;