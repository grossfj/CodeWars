function bouncer(arr) {
    var mas = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            mas.push(arr[i]);
        }
    }
    return mas;
}

bouncer([7, "ate", "", false, 9]);