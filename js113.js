function getIndexToIns(arr, num) {

    console.log(arr.sort(compareNumbers))
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

function compareNumbers(a, b) {
    return a - b;
}

getIndexToIns([40, 60], 50);