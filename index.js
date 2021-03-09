'use strict';

const elastic = require('./lib/services/elastic'),
  helpers = require('./lib/services/elastic-helpers'),
  reindex = require('./lib/services/reindex'),
  streams = require('./lib/streams');

// Initialize the module
module.exports = require('./lib/init');

// Allow subscription to Streams
module.exports.subscribe = streams.subscribe;

// Export helper functions for indices in a Clay instance
module.exports.elastic = elastic;
module.exports.getInstance = elastic.getInstance;
module.exports.helpers = helpers;
module.exports.filters = require('./lib/services/filters');
module.exports.reindex = reindex;
module.exports.streams = streams;

// Page List & Other Helpers
module.exports.stripPrefix = helpers.stripPrefix;
module.exports.indexWithPrefix = helpers.indexWithPrefix;
