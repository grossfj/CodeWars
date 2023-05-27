function correct(string) {
    var mas = string.split('');
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] == '5') {
            mas[i] = 'S';
        } else if (mas[i] == '0') {
            mas[i] = 'O';
        } else if (mas[i] == '1') {
            mas[i] = 'I';
        }
    }
    return mas.join('');
}