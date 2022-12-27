function cutIt(arr) {
    //coding here...
    let str1 = arr[0].length;
    let mas = [];
    let slice;

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length <= str1) {
            str1 = arr[i].length
        }
    }

    for (j = 0; j < arr.length; j++) {
        slice = arr[j].slice(0, str1);
        mas.push(slice);
    }
    return mas;
}