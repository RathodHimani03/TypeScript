var Promise = require("bluebird");

const funcA = int => new Promise( res => res(++int) )
const funcB = int => new Promise( res => res(++int) )
const funcC = int => new Promise( res => res(++int) )

let mainPromise = funcA(1)

// Only execute the funcB promise if a condition is true
if( true )
    mainPromise = mainPromise.then(funcB)

mainPromise = mainPromise.then(funcC)

mainPromise
    .then( result =>  console.log('RESULT:',result))
    .catch( err => console.log('ERROR:',err))