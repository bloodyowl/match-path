# match-path

![https://travis-ci.org/bloodyowl/match-path](https://travis-ci.org/bloodyowl/match-path.svg)

## install

```sh
$ npm install bloody-matchpath
```

## require

```javascript
var matchPath = require("bloody-matchpath")
```

## api

### `matchPath(string, matcher) > Boolean`

checks `string` using the `matcher` pattern.

### patterns

```javascript
"foo.*.bar"
// matches
"foo.bar.bar"
// but not
"foo.bar.baz.bar"

"foo.**.bar"
// matches both
"foo.bar.bar"
// and
"foo.bar.baz.bar"
```
