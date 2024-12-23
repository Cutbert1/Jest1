/**
 * @jest-environment jsdom
 */
 
const addition = require("../calc")

describe("Claculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("Should return 73 for 42 + 31", () => {
            expect(addition(42,31)).toBe(73);
        });
        test("Should return 43.8 for 25.6 + 18.2", () => {
            expect(addition(25.6, 18.2)).toBe(43.8);
        });
    });
    describe("Subtraction function", () => {
    });
    describe("Multiply function", () => {
    });
    describe("Division function", () => {
    });
    
});