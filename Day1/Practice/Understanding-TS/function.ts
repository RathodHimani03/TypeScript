function add (n1: number, n2:number):number{

    return n1+n2;
}

function printResult(num:number):void {
    console.log('Result:'+num)
}
printResult(add(5,12))


//function as type

// let combineValue:Function; //if we take as function type then it will confuse which function have to take
//  combineValue = printResult 

//function as a type
let combineValue : (a:number,b:number) => number

combineValue = add
// combineValue = printResult //it'll throw error

console.log(combineValue(5,6))

//Function Types callbacks

function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){

    const result = n1 + n2  
    cb(result)
}


addAndHandle(4,5,(result)=>console.log(result))