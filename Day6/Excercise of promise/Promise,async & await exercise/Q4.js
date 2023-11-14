// Q4.Create one main function with three parameter
// (sting, string, calculation function), 
// and this main function should return promise
// calculation function -> match the both string with case-insensitive.
// Prmoise should use this calculation function and return the answer of
// calculation function .

function calc(a,b){
    if(a.toLowerCase() == b.toLowerCase()){
        console.log('this strings case insensitive');
    }
    else{
        console.log('this strings not case insensitive'); 
    }
}


const main = (sting,string,calculation) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            return resolve(
                calc(sting,sting)
            )
        },1000)
    })
}

main('ASHU','ashu',calc)