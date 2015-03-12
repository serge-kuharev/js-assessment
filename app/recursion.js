if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        listFiles: function lf (data, dirName) {
            var res = [];

            // If we have correct directory, then don't use directory parameter for subfolders.
            if (dirName && data['dir'] === dirName) {
                    dirName = null;
                }

                data['files'].forEach(function(value) {
                    if (typeof value === 'object') {
                        res = res.concat(lf(value, dirName));
                    } else if (!dirName) {
                        res.push(value);
                    }
                });

                return res;
            },

        permute: function(arr) {
            var result = [],
                usedChars = [];
            function main(){
                var i, ch;
                for (i = 0; i < arr.length; i++) {
                    // Remove one char from input array.
                    ch = arr.splice(i, 1)[0];
                    usedChars.push(ch);
                    // If nothing left in input, then no future permutations possible. Copy array to result.
                    if (arr.length === 0) {
                        result.push(usedChars.slice());
                    }
                    // Go recursive.
                    main();
                    // Add char we removed before to input.
                    arr.splice(i, 0, ch);
                    usedChars.pop();
                }
                return result;
            }
            return main();
        }
    };
});
