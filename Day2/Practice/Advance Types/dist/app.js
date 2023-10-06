"use strict";
var _a;
const e1 = {
    name: 'Ashu',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(2, 3));
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData);
//# sourceMappingURL=app.js.map