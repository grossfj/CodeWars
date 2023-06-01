function findMultiples(integer, limit) {
    //your code here
    var mas = [];
    for (var i = integer; i <= limit; i += integer) {
        if (i % integer == 0) {
            mas.push(i);
        }
    }
    return mas;
}