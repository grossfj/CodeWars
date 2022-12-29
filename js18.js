function alienLanguage(str) {
    //coding here...
    var words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {

        words[i] = words[i].slice(0, -1).toUpperCase() + words[i].slice(-1);

    }

    return words.join(" ");
}