function count(string) {
    let cache = {};
    string.split('').map(v => cache[v] = cache[v] + 1 || 1)
    console.log(cache);
    return cache;
}