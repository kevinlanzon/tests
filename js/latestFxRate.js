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
      if (orderedFxRates[i].FROM_CCY === fromCcy && orderedFxRates[i].TO_CCY === toCcy) {
        return foundRate = orderedFxRates[i].RATE;
      } else if (orderedFxRates[i].FROM_CCY === toCcy && orderedFxRates[i].TO_CCY === fromCcy && foundRate === null) {
        return foundRate = 1 / orderedFxRates[i].RATE;
      }
    }
  }

  if (foundRate === null) {
    throw new Error("No rate found");
  } else {
    return foundRate;
  }
};
