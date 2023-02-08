function abbrevName(name) {
    let str = name.split(" ");
    // code away
    let a = str[0].slice(0, 1).toUpperCase();
    let b = str[1].slice(0, 1).toUpperCase();
    let res = `${a}.${b}`
    return res;
}