if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        return new window.Promise(function(resolve, reject) {
            resolve(value);
        });
    },

    manipulateRemoteData : function(url) {
        return new window.Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();

            req.open('GET', url);

            req.onload = function() {
                var response = JSON.parse(req.responseText).people || [];

                var result = [];
                for (var i = 0; i < response.length; i++) {
                    result.push(response[i].name);
                }
                result.sort();

                resolve(result);
            };

            req.send();
        });
    }
  };
});
