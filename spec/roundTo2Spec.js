describe("#roundTo2Places", function () {

  it("should round 100.056 to 100.06", function () {
    expect(roundTo2Places(100.056)).toEqual(100.06);
  });

  it("should round 100.054 to 100.05", function () {
    expect(roundTo2Places(100.054)).toEqual(100.05);
  });

  it("should round 100.06555 to 100.07", function () {
    expect(roundTo2Places(100.06555)).toEqual(100.07);
  });
});
