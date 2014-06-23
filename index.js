var xhr = require("xhr");
var Promise = require("promise");

/**
 * XHR wrapper, see https://github.com/matthewp/xhr for API
 * @param options URL or Object for use in XHR
 * @returns {Promise} resolves to response data, rejects to XhrError instance
 */
module.exports = function (options) {
	return new Promise(function (resolve, reject) {
		xhr(options, resolve, reject)
	});
};
