// Import does not work in Node but works completely fine in browser is because the V8 engine used in Node is slightly older as that of the one used in browser.

module.exports = {  // To make the values of this object, exportable.
    x: 10,
    y: 20,
    z: function () {
        return 10;
    }
};