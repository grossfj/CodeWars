function positiveSum(arr) {
    var sum = 0;
    if (arr == 0) {
        return 0;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i];
            }
        }
    }

    return sum;
}