function checkForFactor(base, factor) {
    // code here
    var m = base % factor;
    if (m == 0) {
        return true;
    }
    return false;

}