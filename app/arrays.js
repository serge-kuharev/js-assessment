if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(previousValue, currentItem) {
            return previousValue + currentItem;
        });
    },

    remove : function(arr, item) {
        var i,
            len = arr.length;

        for (i = len; i >= 0; i--) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        return this.remove(arr, item);
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return  arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0,
            index = arr.indexOf(item);

        while (index !== -1) {
            count++;
            index = arr.indexOf(item, index + 1);
        }

        return count;
    },

    /*
        This method does not seems most obvious, but it goes through array 
        only once, and then it goes once again through object, so complexity is O = n
        This also does not uses too much memory, cause it creates only object 
        that has duplicates inside, which I should return as array anyway.
     */
    duplicates : function(arr) {
        var dups = {},
            result = [],
            item,
            i,
            len = arr.length;

        arr.forEach(function(item, index) {
            if (dups[item] == null) {
                dups[item] = 0;
            } else {
                dups[item]++;
            }
        });

        for (var duplicate in dups) {
            // Inlude only items with 1 or more occurances.
            if (dups[duplicate]) {
                result.push(duplicate);
            }
        }

        return result;
    },

    square : function(arr) {
        var res = [];

        arr.forEach(function(item) {
            res.push(item*item);
        });

        return res;
    },

    findAllOccurrences : function(arr, target) {
        var res = [],
            index = arr.indexOf(target);

        while (index !== -1) {
            res.push(index);
            index = arr.indexOf(target, index + 1);
        }

        return res;
    }
  };
});
