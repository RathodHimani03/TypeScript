function add(n1:number,n2:number,showData:boolean,phase:string){
  // if(  typeof n1 != 'number' || typeof n2 != 'number'){
  //   throw new Error('Incorrect Input!')
  // }
  
  const result = n1 + n2
  if(showData){
    console.log(phase + result)
  } 
  else{
    return result;
  }
}


const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhase = "Result is:"

const result = add(number1,number2,printResult,resultPhase);

console.log(result)