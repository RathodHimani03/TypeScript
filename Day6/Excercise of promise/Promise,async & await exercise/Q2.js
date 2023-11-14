// From the array of 10 promise, if any 2 promise are
//  Rejected then output should be combination of the 
//  error message of both the promise after all the promise are 
// resolved(Prmoise should be executed one after one).

const obj={}
const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push([ `P`+i])
}

for (let i = 0; i < 10; i++) {
   
       arr[i] = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`promise${i}`)
            }, i * 1000)
        });
   
}


arr[2] = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`promise2`)
    }, 2 * 1000)
});
arr[3] = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`promise3`)
    }, 3 * 1000)
});

Promise.allSettled([...arr]).then((prtMsg)=>{
    console.log(prtMsg)
     }).catch(
        (e)=>console.log("Error:"+e)
     )