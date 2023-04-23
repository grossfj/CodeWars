function findAverage(array) {
    // your code here
    var sum = 0;
    if (array == 0) {
        return 0;
    } else {
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
    }
    return (sum / array.length);
}