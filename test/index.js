var tape = require("tape")
  , match = require("../")

tape("match-path", function(test){

  test.equal(
    match("foo.bar.baz", "foo.**"),
    true
  )
  test.equal(
    match("foo", "foo.**"),
    false
  )
  test.equal(
    match("foo.bar.baz", "foo.*.baz"),
    true
  )
  test.equal(
    match("foo.bar.bar", "foo.*.baz"),
    false
  )
  test.equal(
    match("foo.bar.baz.baz", "foo.**.baz"),
    true
  )
  test.equal(
    match("foo.bar.bar.baz", "foo.*.baz"),
    false
  )
  test.equal(
    match("foo.bar.baz", "foo.*.baz"),
    true
  )
  test.equal(
    match(
      "constructor",
      "constructor"
    ),
    true,
    "hasOwnProperty check"
  )

  test.end()

})
