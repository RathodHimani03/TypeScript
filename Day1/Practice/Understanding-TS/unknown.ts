let userInput:unknown;

let username:string


// username = userInput //Type 'unknown' is not assignable to type 'string'.
//in above if we take userInput as any then will not get any error

if(userInput === 'string'){
    username = userInput
}