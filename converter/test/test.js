const f = require('../scripts/helpers');
const assert = require('assert');

describe(`Test converter`, () => {
    it(`100 meters in versts`, () => {
        let actualValue = 100;
        let actualConvertFrom = 'Meters';
        let actualConvertTo = 'Versts';
        let expected = 0.09;

        let functionResult = f.getConvertedValue(actualValue, actualConvertFrom, actualConvertTo);

        assert.equal(expected, functionResult);
    })
})
