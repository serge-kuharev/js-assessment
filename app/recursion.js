if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function lf (data, dirName) {
		var res = [];

		// If we have correct directory, then don't use directory parameter for subfolders.
		if (dirName && data["dir"] === dirName) {
			dirName = null;
		}

    	data["files"].forEach(function(value) {
    		if (typeof value === "object") {
    			res = res.concat(lf(value, dirName));
    		} else if (!dirName) {
    			res.push(value);
    		}
    	});

    	return res;
    },

    permute: function(arr) {

    }
  };
});
