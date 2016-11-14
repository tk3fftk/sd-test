'use strict';

const assert = require('assert');
const calc = require('../lib/calc');

describe('calc', function () {
    it('should add numbers', function () {
        assert.equal(calc.add(3, 7), 10);
        assert.equal(calc.add(-5, 3), -1);
    });

    it('should sub numbers', function () {
        assert.equal(calc.sub(7, 4), 3);
        assert.equal(calc.sub(2, -3), 5);
    });

    it('should mul numbers', function () {
        assert.equal(calc.mul(5, 5), 25);
        assert.equal(calc.mul(-5, 5), -25);
    });

    it('should div numbers', function () {
        assert.equal(calc.div(5, 5), 1);
        assert.equal(calc.div(5, 2), 2.5);
    });
});
