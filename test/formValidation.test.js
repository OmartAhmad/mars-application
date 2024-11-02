// formValidation.test.js

const { isNotEmpty, isValidEmail } = require('./js/stageOne.js');
const { isValidDate, isValidAccommodation } = require('./js/stageTwo.js');
const { isHealthDeclarationValid, isEmergencyContactValid } = require('./js/stageThree.js');

describe('Stage 1 - Personal Information Validation', () => {
    test('isNotEmpty should return true for non-empty strings', () => {
        expect(isNotEmpty('hello')).toBe(true);
        expect(isNotEmpty('   ')).toBe(false);
        expect(isNotEmpty('')).toBe(false);
    });

    test('isValidEmail should return true for valid emails', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalid-email')).toBe(false);
        expect(isValidEmail('')).toBe(false);
    });
});

describe('Stage 2 - Travel Preferences Validation', () => {
    test('isValidDate should return true for valid dates', () => {
        expect(isValidDate('2024-01-01')).toBe(true);
        expect(isValidDate('invalid-date')).toBe(false);
    });

    test('isValidAccommodation should return true for valid options', () => {
        expect(isValidAccommodation('spaceHotel')).toBe(true);
        expect(isValidAccommodation('martianBase')).toBe(true);
        expect(isValidAccommodation('randomPlace')).toBe(false);
    });
});

describe('Stage 3 - Health and Safety Validation', () => {
    test('isHealthDeclarationValid should return true for "yes" or "no"', () => {
        expect(isHealthDeclarationValid('yes')).toBe(true);
        expect(isHealthDeclarationValid('no')).toBe(true);
        expect(isHealthDeclarationValid('maybe')).toBe(false);
    });

    test('isEmergencyContactValid should return true for non-empty strings', () => {
        expect(isEmergencyContactValid('John Doe')).toBe(true);
        expect(isEmergencyContactValid('')).toBe(false);
    });
});
