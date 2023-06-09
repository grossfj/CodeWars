function combat(health, damage) {
    // Write your code here
    var l;
    if (health > damage) {
        return l = health - damage;
    } else {
        return 0;
    }
}