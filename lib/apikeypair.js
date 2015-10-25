var crypto = require('crypto');

module.exports = {
	calc: function(input, cb) {
		if (typeof(input) === 'function') {
			if (input) {
				input('No input data specified!', null);
			}
		} else {
			var id = crypto.createHash('sha1').update(input, 'utf8').digest('hex');
			var secret = crypto.createHash('md5').update(id, 'utf8').digest('hex') + crypto.randomBytes(32).toString('base64');
			if (cb) {
				cb(null, {
					id: id,
					secret: secret
				});
			}
		}
	},
	calcSync: function(input) {
		if (!input) return 'No input data specified!';
		var id = crypto.createHash('sha1').update(input, 'utf8').digest('hex');
		var secret = crypto.createHash('md5').update(id, 'utf8').digest('hex') + crypto.randomBytes(32).toString('base64');
		return {
			id: id,
			secret: secret
		};
	},
	gen: function(cb) {
		var id = crypto.randomBytes(32).toString('base64');
		var secret = crypto.createHash('md5').update(id, 'utf8').digest('hex') + crypto.randomBytes(32).toString('base64');
		if (cb) {
			cb({
				id: id,
				secret: secret
			});
		}
	},
	genSync: function() {
		var id = crypto.randomBytes(32).toString('base64');
		var secret = crypto.createHash('md5').update(id, 'utf8').digest('hex') + crypto.randomBytes(32).toString('base64');
		return {
			id: id,
			secret: secret
		};
	}
};
