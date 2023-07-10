function doubleChar(str) {
    // Your code here
    var mas = [];

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < 2; j++) {
            mas.push(str[i])
        }
    }
    return mas.join('');
}
