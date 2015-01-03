if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-z])\1/i.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
        var res = /[\d]{3}/.exec(str);

        return (res && res[0]) ? res[0] : false;
    },

    matchesPattern : function(str) {
        //XXX-XXX-XXXX format
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },
    isUSD : function(str) {
        var pattern = /^\$(\d{1,3})(,\d{3})*(\.\d{2})?$/;

        return pattern.test(str);
    }
  };
});
