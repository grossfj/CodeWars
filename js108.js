const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    var count = begin;
    var arr = [];
    var sum = 0;
    do {
        arr.push(count);
        count += step;
    } while (count <= end);

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (begin > end) {
        return 0;
    }
    return sum;
};