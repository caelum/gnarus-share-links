describe("LinkCleaner", function() {
  it("take out the \"http://\" of link", function() {
    var cleaner = new LinkCleaner();

    expect(cleaner.clean("http://caelum.com"))
      .toEqual("caelum.com");

    expect(cleaner.clean("https://caelum.com"))
      .toEqual("caelum.com");
  });

  it("take out 'www.' from link", function() { 
    var cleaner = new LinkCleaner();

    expect(cleaner.clean("www.caelum.com"))
      .toEqual("caelum.com");

    expect(cleaner.clean("http://www.caelum.com"))
      .toEqual("caelum.com");
  });

  it("take out '/' from the end of link", function() {
    var cleaner = new LinkCleaner();

    expect(cleaner.clean("http://www.caelum.com/"))
      .toEqual("caelum.com");
  });

  it("maintain link if is already clean", function() {
    var cleaner = new LinkCleaner();

    expect(cleaner.clean("caelum.com"))
      .toEqual("caelum.com");
  });
});
