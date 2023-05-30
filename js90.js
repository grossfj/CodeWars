function gimme(triplet) {
    var max = Math.max.apply(null, triplet);
    console.log(max);
    var min = Math.min.apply(null, triplet);
    for (var i = 0; i < triplet.length; i++) {
        if (max > triplet[i] && triplet[i] > min) {
            return i;
        }
    }
}