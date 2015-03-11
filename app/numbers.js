if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num >> (bit-1)) & 1;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        return String('00000000' + num.toString(2)).slice(-8);
    },

    multiply: function(a, b) {
        return parseFloat((a*b).toFixed(5));
    }
  };
});

