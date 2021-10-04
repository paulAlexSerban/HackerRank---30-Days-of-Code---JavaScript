/**
 * TASKS
 * (1) - Declare 3 variables: one of type int, one of type double, and one of type String
 * (2) - Read 3 lines of input from stdin (according to the sequence given in the Input Format section) and initialize 3 variables
 * (3) - Use the `+` operator to perform the following operations
 * - (3.1) - Print the sum of `i` plus your integer variable on a new line
 * - (3.2) - Print the sum `d` plus your double variable to a scale of one decimal place on a new line
 * - (3.3) - Concatenate `s` with the string you read as input and print the result on a new line
 * @param {String} strToInt 
 * @param {Float} float 
 * @param {String} str 
 */

function dataTypes(strToInt, float, str) {
    let i = 4;
    let d = 4.0;
    let s = "HackerRank ";
    let int, double, string; // (1)

    int = parseInt(strToInt); // (2)
    double = parseFloat(float); // (2)
    string = str; // (2)

    console.log(i + int); // (3.1)
    console.log((d + double).toFixed(1)); // (3.2)
    console.log(s + string); // (3.3)
}

dataTypes("4", 10, "is the best");