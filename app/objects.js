if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var res = [];

        Object.getOwnPropertyNames(obj).forEach(function(value) {
            res.push(value + ": " + obj[value]);
        });

        return res;
    }
  };
});
