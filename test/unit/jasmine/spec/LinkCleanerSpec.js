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

  it("take out 'www.' from link", function() { 
    var cleaner = new LinkCleaner();

    expect(cleaner.cleanWWW("http://www.caelum.com"))
      .toEqual("http://caelum.com");

    expect(cleaner.cleanWWW("caelum.com"))
      .toEqual("caelum.com");

    expect(cleaner.cleanWWW("www.caelum.com"))
      .toEqual("caelum.com");
  });

  it("take out '/' from the end of link", function() {
    var cleaner = new LinkCleaner();

    expect(cleaner.cleanEndingBar("caelum.com/"))
      .toEqual("caelum.com");

    expect(cleaner.cleanEndingBar("http://www.caelum.com/"))
      .toEqual("http://www.caelum.com");
  });
});
