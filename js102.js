function findUniq(arr) {
    // do magic
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item) => item !== repeated[0])[0]
}