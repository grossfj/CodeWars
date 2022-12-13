function squareDigits(num) {
    return +num.toString().split('').map(i => i * i).join('');
}

squareDigits(1234);