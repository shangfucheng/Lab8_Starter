// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// test function isPhoneNumber
test('Phone number 111-111-1111 to true', ()=>{
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});
test('Phone number (111)111-1111 to true', ()=>{
    expect(functions.isPhoneNumber('(111)111-1111')).toBe(true);
});
test('Phone number 222-2-2222 to false',()=>{
    expect(functions.isPhoneNumber('222-2-2222')).toBe(false);
});
test('Phone number 2223332222 to false',()=>{
    expect(functions.isPhoneNumber('2223332222')).toBe(false);
});

// test for isEmail function
test('Email fushang@ucsd.edu to true',()=>{
    expect(functions.isEmail('fushang@ucsd.edu')).toBe(true);
});
test('Email fushang@abc.co to true',()=>{
    expect(functions.isEmail('fushang@abc.co')).toBe(true);
});
test('Email shang.com to false',()=>{
    expect(functions.isEmail('shang.com')).toBe(false);
});
test('Email fushang@abc.commm to false',()=>{
    expect(functions.isEmail('fushang@abc.commm')).toBe(false);
});

// test for isStrongPassword function
test('Strong password abcde to true',()=>{
    expect(functions.isStrongPassword('abcde')).toBe(true);
});
test('Strong password Abcd12345 to true',()=>{
    expect(functions.isStrongPassword('Abcd12345')).toBe(true);
});
test('Strong password 12345 to false',()=>{
    expect(functions.isStrongPassword('12345')).toBe(false);
});
test('Strong password ab# to false',()=>{
    expect(functions.isStrongPassword('ab#')).toBe(false);
});

// test for isDate function
test('Date 1/02/1234 to true',()=>{
    expect(functions.isDate('01/02/1234')).toBe(true);
});
test('Date 11/22/2222 to true',()=>{
    expect(functions.isDate('11/22/2222')).toBe(true);
});
test('Date 111/22/2222 to false',()=>{
    expect(functions.isDate('111/22/2222')).toBe(false);
});
test('Date 1/2/00 to false',()=>{
    expect(functions.isDate('1/2/00')).toBe(false);
});

// test for isHexColor function
test('Hex color #fff111 to true',()=>{
    expect(functions.isHexColor('#fff111')).toBe(true);
});
test('Hex color 111 to true',()=>{
    expect(functions.isHexColor('111')).toBe(true);
});
test('Hex color @ffffff to false',()=>{
    expect(functions.isHexColor('@ffffff')).toBe(false);
});
test('Hex color #1234567 to false',()=>{
    expect(functions.isHexColor('#1234567')).toBe(false);
});