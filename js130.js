var capitals = function (word) {
    let a = word.split('')
    let arr = []
    for (let i = 0; i < word.length; i++) { if (a[i] === a[i].toUpperCase()) { arr.push(i) } }
    return arr
};