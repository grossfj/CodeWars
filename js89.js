function nbYear(pz, percent, aug, p) {
    let x = 0;
    do {
        pz = pz + pz * percent / 100 + aug;
        x++;
    } while (pz < p);

    return x;
}        