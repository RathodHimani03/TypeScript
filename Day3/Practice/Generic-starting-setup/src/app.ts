// const names:Array<string> = []

// const promise: Promise<string> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },1000)
// })


// promise.then(data =>{
//     // data.split('')
// })


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);



interface Lengthy {

    length: number
}

function compareDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }

    return [element, descriptionText]
}


console.log(compareDescribe('Hi There'))



//the keyof Constraint 

function extraAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Values:' + obj[key];
}

extraAndConvert({ name: 'Max' }, 'name')

class DataStorage<T > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) == -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItem() {
        return [...this.data]
    }
}

const textStrage = new DataStorage<string>();
textStrage.addItem('Ashu');
textStrage.addItem('Ashu');
textStrage.removeItem('Ashu');
// console.log(textStrage.getItem())

const numbeStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' }
// objectStorage.addItem(maxObj);
// objectStorage.addItem({ name: 'Mannu' });
// objectStorage.removeItem(maxObj);
// console.log(objectStorage.getItem())


interface CourseGoal{

    title:string;
    description:string,
    completeUntill:Date;
}

function createCourseGoal( 
    title:string,
    description:string,
    date:Date
):CourseGoal{

    let courseGoal: Partial<CourseGoal>= {}; ;
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntill = date;
    

    return courseGoal as CourseGoal

}


const names:Readonly<string[]> =['Max','Anna']
// names.push('Manu');
// names.pop('Manu');
