// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { countAsAYes } from '../utils.js';
const test = QUnit.test;

test('should expect a true for inputs that start with y', (expect) => {
    const expected = true;
    const actual = countAsAYes('yeis');

    expect.equal(actual, expected);
});

test('should expect a false for inputs that don\'t start with y', (expect) => {
    const expected = false;
    const actual = countAsAYes('neis');

    expect.equal(actual, expected);
});