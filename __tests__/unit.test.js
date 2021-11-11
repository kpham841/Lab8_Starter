// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2

test('test valid phone number', () => {
    expect(functions.isPhoneNumber('626-123-4567')).toBe(true); 
});

test('test valid email', () => {
    expect(functions.isEmail('lol@gmail.com')).toBe(true); 
});

test('Checks valid strong password', () => {
  expect(functions.isStrongPassword('123')).toBe(false)
})

test('Checks invalid date', () => {
  expect(functions.isDate('12736/182367/127836')).toBe(false)
})