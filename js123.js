function sortArray(array) {
    // Return a sorted array.
    var mas = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            mas.push(array[i]);
        }
    }

    var sor = mas.sort(function (a, b) { return b - a });
    console.log(sor);

    for (var j = 0; j < array.length; j++) {
        if (array[j] % 2 !== 0) {
            array[j] = sor.shift();

        }
    }
    console.log(array);
    return array;

}