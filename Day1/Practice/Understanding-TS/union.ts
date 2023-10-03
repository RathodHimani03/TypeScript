//union type 

function combine(input: number| string,input2 : number|string){

    let result;

    if(typeof input === 'number' && typeof input2 === 'number'  ){
        result = input +input2
    }
    else{
        result = input.toString()+ input.toString();
    }
    return result;
}

console.log(combine(12,56))
console.log(combine('ashu','himani'))