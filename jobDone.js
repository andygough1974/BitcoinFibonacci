

function jobDone() {

    // this function are checking all unit tests and return true if job is done
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

    //console.log('<==== Unit test run ======>');

    for (var index = 0; index < expectedResult.length; index++) {

        unitTestResult = (expectedResult[index].value == _fibonachiFunction(expectedResult[index].number));

        //console.log('Testing number =>', expectedResult[index].value);
        //console.log('Expected result => ', expectedResult[index].number);

//        if (unitTestResult == true) {
//            console.log('Test state SUCCESS');
//
//        } else {
//            console.log('Test state FAIL');
//            break;
//        }
    }

//    if (unitTestResult == true) {
//        console.log('Unit test complete with SUCCESS result');
//    } else {
//        console.log('Unit test complete with FAIL result');
//    }

    return unitTestResult;

}

exports.main = jobDone;
