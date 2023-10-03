//using type alias
type combination = number | string;
type  conversation = 'as-number' | 'as-text' 


function combine(
    input: combination,
    input2 : combination,
    // resultconv:string
    resultconv :conversation //union type combine with literal type 
    ){

    let result;

    if(typeof input === 'number' && typeof input2 === 'number' || resultconv === 'as-number' ){
       result = +input + +input2
    }
    else{
        result = input.toString()+ input.toString();
    }
    return result;
}

console.log(combine(12,56,'as-number'))
console.log(combine('12','56 ','as-number'))
console.log(combine('ashu','Himani ','as-text'))