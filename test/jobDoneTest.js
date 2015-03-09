var assert = require('assert');
var fs = require('fs');
var path = require('path');

describe('jobDone', function() {

    it('jobDone works', function() {
        var file = path.resolve(__dirname + '/../jobDone.js');
        var code = fs.readFileSync(file, 'utf8');
        var main = eval(code);

        assert.equal(typeof code, 'string');
        assert.equal(typeof jobDone, 'function');
        assert.equal(typeof fibonachiNumber, 'function');
        assert.equal(typeof main, 'function');
        assert.equal(main, jobDone);
        assert.equal(main(), true);
        assert.equal(jobDone(), true);
    });

});
