// 3) Write a TypeScript function to extract unique characters from a string.
// For Example: 
// input: prominentpixel
// output: prominetixl



function unique(s: string) {

    let arr = s.split('');
    let set = new Set();
    let returnString;
    for (let i of arr) {
       set.add(i)
    }

    returnString = [...set].join('');
    return returnString;



}

console.log(unique('prominentpixel'))