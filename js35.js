function countSheeps(arrayOfSheep) { 
    // TODO May the force be with you
    var count = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count;
}