function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var str = dna.split('');
    var mas = [];
    for (var i = 0; i < str.length; i++) {

        if (str[i] == "T") {
            str[i] = "U";
        }
        mas.push(str[i])
    }
    return str.join('');
}