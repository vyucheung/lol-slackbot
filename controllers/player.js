var express = require('express')
  , router = express.Router();

var model = require('../models/player.js');

var constants = require('../helpers/constants.js');
var parser = require('../helpers/parser.js');

router.post('/api/lol', function(req, res) {
  var command = parser.getCommand(req.body.text);
  var parameters = parser.getParameters(req.body.text);

  if (!command) {
    throw new Error(constants.invalid_command);
  }
  else if (!parameters) {
    throw new Error(constants.invalid_parameters);
  }

  if (command === 'lastmatch') {
    summonerIDs = model.getSummonerIDs(parameters);
    res.json({
      reponse_type: 'in_channel',
      text: summonerIDs.toString(),
      parse: 'full',
      link_names: true
    });
  }
});

module.exports = router;