"use strict";

var findLatestFxRate = function(fxRates, fromCcy, toCcy) {

  var foundRate = null;

  var orderedFxRates = fxRates.sort(function(a, b) {
    return new Date(b.DATE) - new Date(a.DATE);
  });

  if (fromCcy === toCcy) {
    return foundRate = 1;
  } else {
    for (var i = 0; i < orderedFxRates.length; i++) {

      var from = orderedFxRates[i].FROM_CCY;
      var to   = orderedFxRates[i].TO_CCY;
      var rate = orderedFxRates[i].RATE;

      if (from === fromCcy && to === toCcy) {
        return foundRate = rate;
      } else if (from === toCcy && to === fromCcy && foundRate === null) {
        return foundRate = 1 / rate;
      }
    }
  }

  if (foundRate === null) {
    throw new Error("No rate found");
  } else {
    return foundRate;
  }
};
