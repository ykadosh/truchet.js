import {expect} from 'chai';
import {random, getType, isObject, equals} from './utility';

describe('utility', () => {
    it('random()', () => {
        expect(random(0, 10)).to.be.within(0, 10);
        expect(random(10, 0)).to.be.within(0, 10);
        expect(random(90, 100)).to.be.within(90, 100);
        expect(random(-10, 10)).to.be.within(-10, 10);
    });
    it('getType()', () => {
        expect(getType({})).to.eql('Object');
        expect(getType([])).to.eql('Array');
        expect(getType('')).to.eql('String');
        expect(getType(null)).to.eql('Null');
        expect(getType(undefined)).to.eql('Undefined');
        expect(getType(0)).to.eql('Number');
    });
    it('isObject()', () => {
        expect(isObject({})).to.eql(true);
        expect(isObject(null)).to.eql(false);
        expect(isObject(undefined)).to.eql(false);
        expect(isObject([])).to.eql(false);
        expect(isObject(0)).to.eql(false);
        expect(isObject('')).to.eql(false);
    });
    it('equals()', () => {
        expect(equals({}, {})).to.eql(true);
        expect(equals({foo: 'bar'}, {foo: 'bar'})).to.eql(true);
        expect(equals({foo: 'bar'}, {})).to.eql(false);
        expect(equals({}, {foo: 'bar'})).to.eql(false);
        expect(equals({foo: 'bar'}, {foo: 'bars'})).to.eql(false);
        expect(equals({}, undefined)).to.eql(false);
    });
});