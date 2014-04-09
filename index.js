var doubleStarRE = /([\S\s]*)(?:\*{2})([\S\s]*)/g
  , simpleStarRE = /([\S\s]*)(?:\*)([\S\s]*)/g
  , dotsRE = /\./g
  , map = {}

module.exports = function(property, matcher){
  return toMatcher(matcher).test(property)
}

/**
 *
 * foo.* -> foo.[^.]+
 * foo.** -> foo.[\s\S]+
 */
function toMatcher(string){
  if(map.hasOwnProperty(string)) {
    return map[string]
  }
  var matcher = RegExp(
    "^" +
    string
      .replace(doubleStarRE, "$1[\\s\\S]+$2")
      .replace(simpleStarRE, "$1[^.]+$2")
      .replace(dotsRE, "\\.") +
    "$"
  )
  return map[string] = matcher
}
