if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(fn, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ", " + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var res = [];

        arr.forEach(function(value) {
            res.push(function() {
                return fn(value);
            });
        });

        return res;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function(previousValue, currentItem) {
            return previousValue + currentItem;
        });
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return fn.apply(fn, args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return function() {            
            var joinedArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(fn, joinedArgs);
        }
    },

    curryIt : function(fn) {
        function applyArgs(fn, arguments) {
            return fn.apply(null, arguments);
        }

        function getSavedArgs(savedArguments, argCount) {
            return function (currentArgument) {
                savedArguments.push(currentArgument);

                var isAllArgsProvided = savedArguments.length === argCount;

                if (isAllArgsProvided) {
                    return applyArgs(fn, savedArguments);
                } else {
                    return getSavedArgs(savedArguments, argCount);
                }
            };
        }

        return getSavedArgs([], fn.length);
    }
  };
});
