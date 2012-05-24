function LinkCleaner() {
  this.cleanHttp = function(link) {
    return link.replace(/^http[s]?:\/\//,"");
  }

  this.cleanWWW = function(link) {
    return link.replace(/www\./,"");
  }

  this.cleanEndingBar = function(link) {
    return link.replace(/\/$/,"");
  }
}
