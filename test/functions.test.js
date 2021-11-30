// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem
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

test('multiplyBySeven should return a number multiplied by 7', (expect) => {
    const expected1 = 28;
    const actual1 = multiplyBySeven(4);
    
    const expected2 = 21;
    const actual2 = multiplyBySeven(3);

    const expected3 = 14;
    const actual3 = multiplyBySeven(2);

    expect.equal(actual1, expected1, '4 should be multiplied by 7 to return 28');
    expect.equal(actual2, expected2, '3 should be multiplied by 7 to return 21');
    expect.equal(actual3, expected3, '2 should be multiplied by 7 to return 14');

});

test('multiplyBy12ThenHalve should take in a number multiply it by 12 then divide the result in half', (expect) => {
    const expected1 = 24;
    const actual1 = multiplyBy12ThenHalve(4);

    const expected2 = 36;
    const actual2 = multiplyBy12ThenHalve(6);

    const expected3 = 48;
    const actual3 = multiplyBy12ThenHalve(8);

    expect.equal(actual1, expected1, 'should take in 4 and return 24');
    expect.equal(actual2, expected2, 'should take in 6 and return 36');
    expect.equal(actual3, expected3, 'should take in 8 and return 48');

});

test('divideThenMultiply should take in three numbers divide the first by the second and multiply the result by the third', (expect) => {
    const expected1 = 10;
    const actual1 = divideThenMultiply(8, 4, 5);

    const expected2 = 25;
    const actual2 = divideThenMultiply(10, 2, 5);

    const expected3 = 6;
    const actual3 = divideThenMultiply(4, 2, 3);

    expect.equal(actual1, expected1, ' should take in 8, 4, 5 and return 10');
    expect.equal(actual2, expected2, ' should take in 10, 2, 5 and return 25');
    expect.equal(actual3, expected3, ' should take in 4, 2, 3 and return 6');

});

test('returnAsAnArray should take in three numbers and return those numbers as an array', (expect) => {
    const expected1 = [8, 4, 5];
    const actual1 = returnAsAnArray(8, 4, 5);

    const expected2 = [6, 6, 6];
    const actual2 = returnAsAnArray(6, 6, 6);

    const expected3 = [10, 20, 30];
    const actual3 = returnAsAnArray(10, 20, 30);

    expect.deepEqual(actual1, expected1, 'should return [8, 4, 5]');
    expect.deepEqual(actual2, expected2, 'should return [6, 6, 6]');
    expect.deepEqual(actual3, expected3, 'should return [10, 20, 30]');

});

test('returnAsAString should take in three numbers and return them together as a string', (expect) => {
    const expected1 = '845';
    const actual1 = returnAsAString(8, 4, 5);

    const expected2 = '666';
    const actual2 = returnAsAString(6, 6, 6);

    const expected3 = '678';
    const actual3 = returnAsAString(6, 7, 8);
        
    expect.deepEqual(actual1, expected1, "should return '845' ");
    expect.deepEqual(actual2, expected2, "should return '666' ");
    expect.deepEqual(actual3, expected3, "should return '678' ");
});

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 12.';
    const actual1 = makeLuckyGreeting(8, 4);

    const expected2 = 'Hello! Your lucky number for the day is 6.';
    const actual2 = makeLuckyGreeting(4, 2);

    const expected3 = 'Hello! Your lucky number for the day is 35.';
    const actual3 = makeLuckyGreeting(10, 25);

    expect.equal(actual1, expected1, 'should return Hello! Your lucky number for the day is 12.');
    expect.equal(actual2, expected2, 'should return Hello! Your lucky number for the day is 6.');
    expect.equal(actual3, expected3, 'should return Hello! Your lucky number for the day is 35.');
});

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const expected1 = 'apple';
    const actual1 = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    const expected2 = 'jiji';
    const actual2 = getSecondItem(['tilly', 'jiji', 'penny']);

    const expected3 = 'cats';
    const actual3 = getSecondItem(['dogs', 'cats', 'bunnies', 'birds']);

    expect.equal(actual1, expected1, "should return 'apple'");
    expect.equal(actual2, expected2, "should return 'jiji'");
    expect.equal(actual3, expected3, "should return 'cats'");
});

test('getLastItem should take an array and return the LAST item in the array, no matter the array\'s length', (expect) => {
    const expected1 = 'plum';
    const actual1 = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    const expected2 = 'penny';
    const actual2 = getLastItem(['tilly', 'jiji', 'penny']);

    const expected3 = 'hamsters';
    const actual3 = getLastItem(['dogs', 'cats', 'bunnies', 'birds', 'hamsters']);


    expect.deepEqual(actual1, expected1, 'should return plum');
    expect.deepEqual(actual2, expected2, 'should return penny');
    expect.deepEqual(actual3, expected3, 'should return hamsters');
    
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

