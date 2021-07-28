var params2 = new URLSearchParams("foo=1&bar=2");
var params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
var params3 = new URLSearchParams([["foo", "1"], ["bar", "2"]]);

// Pass in a record
var params4 = new URLSearchParams({"foo": "1", "bar": "2"});

console.log(params2, params2a, params3, params4)
