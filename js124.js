function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    console.log(odd);
    return array.map((x) => x % 2 ? odd.shift() : x);
}