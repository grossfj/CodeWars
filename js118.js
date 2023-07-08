function chunkArrayInGroups(arr, size) {
    var mas = [];
    for (var i = 0; i < arr.length; i += size) {
        mas.push(arr.slice(i, size + i));
        console.log(arr.slice(i, size + i))
    }
    console.log(mas)
    return mas;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);