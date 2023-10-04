// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 'admin', READ_ONLY = 100,AUTHOR = 'AUTHOR'}

const person = {

    name:"himani",
    age:30,
    hobbies:['Sports','Cooking'],
    role:Role.ADMIN

}

console.log(person.role == Role.ADMIN)
