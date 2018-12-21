import {expect} from 'chai';
import {random} from './utility';

describe('utility', () => {
    it('random()', () => {
        expect(random(0, 10)).to.be.within(0, 10);
        expect(random(10, 0)).to.be.within(0, 10);
        expect(random(90, 100)).to.be.within(90, 100);
        expect(random(-10, 10)).to.be.within(-10, 10);
    });
});