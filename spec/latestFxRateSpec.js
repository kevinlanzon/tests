"use strict";

describe("#findLatestFxRate", function() {

  var fxRates = [
  {
    FROM_CCY: "GBP",
    TO_CCY: "USD",
    RATE: 1.5,
    DATE: "2016-01-22"
  },
  {
    FROM_CCY: "GBP",
    TO_CCY: "USD",
    RATE: 1.5,
    DATE: "2016-01-21"
  },
  {
    FROM_CCY: "EUR",
    TO_CCY: "USD",
    RATE: 1.2,
    DATE: "2016-01-22"
  }
];

  beforeEach(function() {
    var orderedFxRates = fxRates.sort(function(a, b) {
      return new Date(b.DATE) - new Date(a.DATE);
    });
  });

  it("should sort the array by the date property", function() {
    expect(fxRates[2].DATE).toEqual("2016-01-21");
  });

  it("should return 1 for GBP to GBP", function() {
    expect(findLatestFxRate(fxRates, "GBP", "GBP")).toEqual(1);
  });

  it("should find the latest rate from GBP to USD", function() {
    expect(findLatestFxRate(fxRates, "GBP", "USD")).toEqual(1.5);
  });

  it("should find the latest rate from EUR to USD", function() {
    expect(findLatestFxRate(fxRates, "EUR", "USD")).toEqual(1.2);
  });
});
