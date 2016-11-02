/**
 * Created by david on 02/11/16.
 */
var calcModule = require('./../calc');
var chai = require('chai');
var expect = chai.expect;

describe('calc sum test', function() {
    it('should sum return 4', function (done) {
        expect(calcModule.sum(2,2)).to.equal(4);
        done();
    });
});

describe('calc sub test', function() {
    it('should sub return 1', function (done) {
        expect(calcModule.sub(3,2)).to.equal(1);
        done();
    });
});

describe('calc mult test', function() {
    it('should mult return 9', function (done) {
        expect(calcModule.mult(3,3)).to.equal(9);
        done();
    });
});

describe('calc div test', function() {
    it('should div return 5', function (done) {
        expect(calcModule.div(10,2)).to.equal(5);
        done();
    });
});