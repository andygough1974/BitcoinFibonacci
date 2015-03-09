var assert = require('assert');
var fibonachiFunction = require('../fibonachiFunction.js');
var testLogic = require('./fibonachiTestLogic.js');

describe('Test fibonachi', function() {
    it('test fibonachi logic', function (done_callback) {

        assert.equal(testLogic.main(fibonachiFunction.main), true);

        done_callback(null);
    });
});
