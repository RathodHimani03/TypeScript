// tuple is fixed length with type

// let role = [2,"ashu"]

let Tuple:[number, string];

Tuple = [2,'ashu']

Tuple.push('Himani') //push is an exception which allowed in tuples

console.log(typeof(Tuple) )


//named tuple-Named tuples provide more context for what our index values represent.    
const graph: [x: number, y: number] = [55.2, 41.3];


// Destructuring tuple

const graph2:[number,number] = [55.3,41.3]

const[x,y] = graph2