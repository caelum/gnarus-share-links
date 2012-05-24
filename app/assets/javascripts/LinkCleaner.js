function LinkCleaner() {
  this.clean = function(link) {
    return new CleanLinkCreator(link)
      .cleanHttp()
      .cleanWWW()
      .cleanEndingBar()
      .getLink();
  }

  function CleanLinkCreator(link) {
    var _link = link;

    this.cleanHttp = function() {
      _link = _link.replace(/^http[s]?:\/\//,"");
      return this;
    }

     this.cleanWWW = function() {
      _link = _link.replace(/www\./,"");
      return this;
    }

    this.cleanEndingBar = function() {
      _link = _link.replace(/\/$/,"");
      return this;
    }

    this.getLink = function() {
      return _link;
    }
  }
}
