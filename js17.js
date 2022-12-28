function firstToLast(str, c) {
    //coding here..
    let firstCharacter = str.indexOf(c),
        lastCahracter = str.lastIndexOf(c);

    return firstCharacter > -1 ? lastCahracter - firstCharacter : firstCharacter;

}