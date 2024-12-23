const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });

});


/* Testing more than one DOM component or test by loading entire HTML page and attach it to the mock DOM. */

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("test h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });

});