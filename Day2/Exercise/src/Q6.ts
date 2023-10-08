/**Create one interface named Student contains id, name, college, age, gender
properties. gender is a optional property.
then after create one array of Student type. and write a
logic that create one object that contains data about number of
students in particular college. Done
For Example:
if students: Student = [
        {
                id: 1,
                name: 'Rohan',
                college: 'GEC',
                age: 20
        },
        {
                id: 2,
                name: 'Rahul',
                college: 'GEC',
                age: 20
        },
        {
                id: 3,
                name: 'Ram',
                college: 'VVP',
                age: 20
        },
        {
                id: 4,
                name: 'Rakesh',
                college: 'DARSHAN',
                age: 20
        },
];**/

interface student {

        id: number;
        name: string;
        colleage: string;
        age: number;
        gender?: string
}


type studentOfColleage = student;



function findNumber(obj) {

        const colleage = new Set();

        const numberOfStudent = []
        for (let i of obj) {

                for (let j in i) {
                        if (j == 'college') {
                                colleage.add(i[j])
                        }
                }
        }

        let allCollege = [...colleage]
        for (let k of allCollege) {
                let c = 0;
                let temObj = {}
                for (let i of obj) {

                        for (let j in i) {
                                if (i[j] == k) {
                                        c++;
                                }
                        }
                }
                temObj['college'] = k
                temObj['noOfStudent'] = c

                numberOfStudent.push(temObj)
        }

        return numberOfStudent;

        console.log(allCollege)

}


let Student = [
        {
                id: 1,
                name: 'Rohan',
                college: 'GEC',
                age: 20
        },
        {
                id: 2,
                name: 'Rahul',
                college: 'GEC',
                age: 20
        },
        {
                id: 3,
                name: 'Ram',
                college: 'VVP',
                age: 20
        },
        {
                id: 4,
                name: 'Rakesh',
                college: 'DARSHAN',
                age: 20
        },
];

console.log(findNumber(Student))


/**output:

[
        {
                college: 'GEC',
                noOfStudents: 2
        },
        {
                college: 'VVP',
                noOfStudents: 1
        },
        {
                college: 'DARSHAN',
                noOfStudents: 1
        }
]**/