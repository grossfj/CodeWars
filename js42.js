function XO(str) {
    var sl = str.toLowerCase();
    var o = 0;
    var x = 0;
    for (var i = 0; i < sl.length; i++) {
        if (sl[i] == "o") {
            o++;
        } else if (sl[i] == "x") {
            x++;
        }
    }

    if (o == x) {
        return true;
    } else {
        return false;
    }
}