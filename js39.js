function isTriangle(a, b, c) {
    var result = 0;
    if (a + b > c) {
        result++
    } if (b + c > a) {
        result++
    } if (c + a > b) {
        result++
    }
    if (result === 3) {
        return true;
    } else {
        return false;
    }
}d