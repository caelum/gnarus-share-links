describe("LinkCleaner", function() {
  it("take out the \"http://\" of link", function() {
    var cleaner = new LinkCleaner();

    expect(cleaner.cleanHttp("http://caelum.com"))
      .toEqual("caelum.com");

    expect(cleaner.cleanHttp("caelum.com"))
      .toEqual("caelum.com");

    expect(cleaner.cleanHttp("https://caelum.com"))
      .toEqual("caelum.com");
  });
});
