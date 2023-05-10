function findShort(s) {
    var mas = s.split(' ');
    var lengthx = mas[0].length;
    for (var i = 0; i < mas.length; i++) {
        if (lengthx >= mas[i].length) {
            lengthx = mas[i].length;
        }
    }
    return lengthx;
}