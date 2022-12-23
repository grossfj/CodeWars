function giveMeFive(obj) {
    let mas = [];

    for (var key in obj) {
        if (key.length == 5) {
            mas.push(key);
        }
    }
    for (var key in obj) {
        if (obj[key].length == 5) {
            mas.push(obj[key]);
        }
    }
    return mas;
}