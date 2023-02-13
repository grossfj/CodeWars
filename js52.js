const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    let res = distanceToPump - (mpg * fuelLeft);
    if (res > 0) {
        return false;
    } else {
        return true;
    }
};