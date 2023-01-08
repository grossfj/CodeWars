function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var sum;
    var average;
    classPoints.push(yourPoints);
    for (var i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    average = sum / classPoints.lrngth;
    if (average < classPoints[classPoints.length - 1]) {
        return true;
    } else {
        return false;
    }
}