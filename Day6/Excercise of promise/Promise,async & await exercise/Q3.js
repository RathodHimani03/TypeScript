// Q3. Which async/sync in foreach and for loop(try to break it).


const arr = [2, 4, 1, 3]

function print(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time*1000)
    });
}


const testForEach =(arr) => {arr.forEach(
    async function(arr){
    await print(arr)
    console.log(`Statement ${arr}`)
})}

testForEach(arr)

