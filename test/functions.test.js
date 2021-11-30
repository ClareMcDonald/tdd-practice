// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclaimationPoints should return a string with 3 exclaimation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';

    const actual1 = addExclamationPoints('puppy');

    expect.equal(actual1, expected1);

    const expected2 = 'guppy!!!';

    const actual2 = addExclamationPoints('guppy');

    expect.equal(actual2, expected2);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

