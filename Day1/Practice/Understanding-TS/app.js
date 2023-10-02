function add(n1, n2, showData, phase) {
    // if(  typeof n1 != 'number' || typeof n2 != 'number'){
    //   throw new Error('Incorrect Input!')
    // }
    var result = n1 + n2;
    if (showData) {
        console.log(phase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhase = "Result is:";
var result = add(number1, number2, printResult, resultPhase);
console.log(result);
