var stringJoin = function() {
    return Array.prototype.join(arguments, '');
};

var o = {};

var foo = function() {
    console.log('foo');
};

var bar = function() {
    console.log('bar');
};