function enough(cap, on, wait) {
    // your code here
    var sum;
    var ow = on + wait;
    if (ow > cap) {
        sum = wait + on - cap;
    } else {
        return 0;
    }
    return sum;
}
