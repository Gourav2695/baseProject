var collection = [1, 2, 3, 4, 5, 6, 7, 8];

function demo(data, callback) {
    var delay = Math.ceil(Math.random() * 3000);
    setTimeout(function() { callback(null, data); }, delay);
};
collection.forEach(function(elem) {
    demo(elem, function(err, elem) {
        console.log(elem + "inserted");
    });
});