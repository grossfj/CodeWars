function grow(x) {
    var sum = 1;
    for (var i = 0; i < x.length; i++) {
        sum *= x[i];
    }
    return sum;
}