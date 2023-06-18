function remove(string) {
    var mas = string.split('');
    var ind = mas.length - 1;
    var newmas = [];
    if (mas[ind] === '!') {
        newmas = mas.pop();
    }
    return mas.join('');
}