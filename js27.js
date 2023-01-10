function squareSum(numbers) {
    var sumsq = 0;
    for (var i = 0; i < numbers.length; i++) {
        sumsq += Math.pow(numbers[i], 2);

    }
    return sumsq;
}