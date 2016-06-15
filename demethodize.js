// http://colintoh.com/blog/5-array-methods-that-you-should-use-today

// Demethodizing the Array method, forEach(),  into a generic "each"
var each = Function.prototype.call.bind([].forEach);

var nodeList = document.querySelectorAll("p");

each(nodeList, bold);

function bold(node) {
   node.style.fontWeight = "bold";
}


// https://gist.github.com/prestonp/fecf05c06e15853692bc

// http://tech.pro/blog/2097/clever-way-to-demethodize-native-js-methods
var demethodize = Function.prototype.bind.bind(Function.prototype.call);

// demethodize lets you generalize functions over nodelists, jquery objects, and strings
var map = demethodize([].map);

map('Hello world', function(c) { return c.toUpperCase(); });

// What's more interesting is you can do this despite strings not having a .prototype.map
[].map.call('Hello world', function(c) { return c.toUppercase(); });