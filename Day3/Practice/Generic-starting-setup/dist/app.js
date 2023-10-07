function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);
function compareDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(compareDescribe('Hi There'));
function extraAndConvert(obj, key) {
    return 'Values:' + obj[key];
}
extraAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) == -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStrage = new DataStorage();
textStrage.addItem('Ashu');
textStrage.addItem('Ashu');
textStrage.removeItem('Ashu');
const numbeStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    ;
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntill = date;
    return courseGoal;
}
const names = ['Max', 'Anna'];
//# sourceMappingURL=app.js.map