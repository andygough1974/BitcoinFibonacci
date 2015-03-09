
function fibonachiNumber(n) {

    if (n < 2) {
        return 1;
    } else {
        return fibonachiNumber(n - 2) + fibonachiNumber(n - 1);
    }
}



function jobDone() {

    //this function are checking all unit tests and return true if job is done
    var expectedResult = [
        {
            number : 0,
            value : 1
        },
        {
            number : 5,
            value : 8
        },
        {
            number : 10,
            value : 89
        },
        {
            number : 15,
            value : 987
        },
        {
            number : 20,
            value : 10946
        },
        {
            number : 25,
            value : 121393
        }
    ];

    var unitTestResult = true;
    for (var index = 0; index < expectedResult.length; index++) {
        var actual = fibonachiNumber(expectedResult[index].number);
        var expected = expectedResult[index].value;
        var result = (actual == expected);
        if (result == false) {
            unitTestResult = result;
        }
    }
    return unitTestResult;

}

exports.main = jobDone;
