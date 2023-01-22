function fakeBin(x) {
    var masx = x.split('');
    for (var i = 0; i < masx.length; i++) {
        if (x[i] < 5) {
            masx[i] = 0;
        } else {
            masx[i] = 1;
        }
    }
    return masx.join('');
}