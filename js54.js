function points(games) {
    let re = 3;
    let res = 0;
    for (var i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            res += 3;
        } else if (games[i][0] == games[i][2]) {
            res++
        }
    }
    return (res);
}