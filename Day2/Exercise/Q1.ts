// 1) Create two arrays and two objects and concatenating those two arrays and two object using spread operator.
// For example:
// arr1 = [1,2,3,4]
// arr2 = [1,2,5]


// obj1 = {id:1, name:"Mohan"}
// obj2 = {age: 20, country: "IND"}



function concate(a1, a2) {

    let concated:any;
    console.log(Array.isArray(a1))
    if (Array.isArray(a1)) {
        concated = Array(...a1, ...a2)
    }
    else {
        concated = { ...a1, ...a2 }
    }
    return concated;
}

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 5]


console.log(concate(arr1, arr2)) 
// output: [1,2,3,4,1,2,5]

let obj1 = { id: 1, name: "Mohan" }
let obj2 = { age: 20, country: "IND" }

console.log(concate(obj1, obj2))
// output: {"id": 1, "name": "Mohan", "age": 20, "country": "IND"}