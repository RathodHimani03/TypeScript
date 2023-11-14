//Q.1: Print the number after the seconds using promise
// (also number is value of second), i.e arr = [2,4,1,3] 
//  Print 2 after 2 sec, than print 4 after next 4 sec,...


const arr = [2, 4, 1, 3]

const promise = (time, print) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(print());
    }, time)
  })
}

promise(1000,()=>console.log("Printing the numbers"))
.then(()=>{
  return arr.forEach((arr)=>
  promise(arr*1000,()=>console.log(arr))
)
})