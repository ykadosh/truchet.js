import {expect} from 'chai';
import {equals} from './array';

describe('utility/array', () => {
    it('equals()', () => {
        expect(equals([1,2,3], [1,2,3])).to.equal(true);
        expect(equals([1,2], [1,2,3])).to.equal(false);
        expect(equals([1,2,3], [1,2])).to.equal(false);
        expect(equals([1,2,3], [1,1,1])).to.equal(false);
    });
});