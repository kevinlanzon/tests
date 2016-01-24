"use strict";

var findLatestFxRate = function(fxRates, fromCcy, toCcy) {

  var foundRate = null;

  var orderedFxRates = fxRates.sort(function(a, b) {
    return new Date(b.DATE) - new Date(a.DATE);
  });

  if (fromCcy === toCcy) {
    return foundRate = 1;
  }
};