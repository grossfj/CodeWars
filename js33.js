function minMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [min, max]; // fix me!

}