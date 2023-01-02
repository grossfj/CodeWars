function invert(array) {
    var a;
    var mas = [];
    for (var i = 0; i < array.length; i++) {
        a = -(array[i]);
        mas.push(a);
    }
    return mas;
}