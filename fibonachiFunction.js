

function fibonachiNumber(n) {

    return 0;
     
    if (n < 2) {
        return 1;
    } else {
        return fibonachiNumber(n - 2) + fibonachiNumber(n - 1);
    }
}

exports.main = fibonachiNumber;
