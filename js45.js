function basicOp(operation, value1, value2) {
    // Code
    var res = 0;
    if (operation === '+') {
        res = value1 + value2;
    } else if (operation === '-') {
        res = value1 - value2;
    } else if (operation === '*') {
        res = value1 * value2;
    } else if (operation === '/') {
        res = value1 / value2;
    }
    return res;
}