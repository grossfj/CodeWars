function mutation(arr) {

    var mas1 = arr[0].toLowerCase();
    var mas2 = arr[1].toLowerCase();
    for (var i = 0; i < arr[1].length; i++) {
        if (mas1.indexOf(mas2[i]) < 0) {
            return false;
        }
    }
    return true;
}
mutation(["hello", "hey"]);