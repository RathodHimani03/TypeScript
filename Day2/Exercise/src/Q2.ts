// 2) Create arrow functions which takes parameter as student's(Object) array
//    1. function returns those students array whose marks is greater than 70.
//    2. function returns array which contains only name of all students
//    3. function returns students array with one additional field in student object. Field name is result if marks is grater than 33, student's result is "PASS" otherwise "FAIL".
// Note: don't use "any" as variable type(students: any)
// students = [
//     {
//         id: 1,
//         name: "Mohan",
//         collage: "VVP",
//         marks: 60
//     },
//     {
//         id: 2,
//         name: "Rakesh",
//         collage: "VVP",
//         marks: 71
//     },
//     {
//         id: 3,
//         name: "Manohar",
//         collage: "GECR",
//         marks: 80
//     },
//     {
//         id: 4,
//         name: "Rohan",
//         collage: "GECR",
//         marks: 70
//     },
//     {
//         id: 5,
//         name: "Mohit",
//         collage: "DARSHAN",
//         marks: 31
//     }
// ];



function studMark(arr:Object[]){
 
    let markArray = []
   
     for (let i of arr){
          for(let j in i){
             if(j == 'marks' && i[j]>70){
                 markArray.push(i);
             }
             
           }
        
     }
     return markArray;

}


function studName(arr:Object[]){
 
    let markArray = []
    let nameOfstud = []
     for (let i of arr){
          for(let j in i){
              if(j == 'name'){
                nameOfstud.push(i[j])
             }
           }
        
     }
     return nameOfstud;

}

function studResult(arr:Object[]){
 
    
    for (let i of arr){
        for(let j in i){
           if(j == 'marks' && i[j]>33){
              i['result'] = 'PASS'
           }
           else{
            i['result'] = 'FAIL'
           }
           
         }
      
   }
     return arr;

}



let students = [
        {
            id: 1,
            name: "Mohan",
            collage: "VVP",
            marks: 60
        },
        {
            id: 2,
            name: "Rakesh",
            collage: "VVP",
            marks: 71
        },
        {
            id: 3,
            name: "Manohar",
            collage: "GECR",
            marks: 80
        },
        {
            id: 4,
            name: "Rohan",
            collage: "GECR",
            marks: 70
        },
        {
            id: 5,
            name: "Mohit",
            collage: "DARSHAN",
            marks: 31
        }
    ];
    
//students array whose marks is greater than 70.

console.log(studMark(students))

//array which contains only name of all students
console.log(studName(students))

//students array with one additional field in student object. Field name is result if marks is grater than 33, student's result is "PASS" otherwise "FAIL".
console.log(studResult(students))
