function feast(beast, dish) {
    //your function here
    var n1 = beast.split('');
    var n2 = dish.split('');
    console.log(n2, n1)
    var l1 = n1.pop();
    var l2 = n2.pop();
    if (n1[0] == n2[0] && l1 == l2) {
        return true;
    }
    return false;
}