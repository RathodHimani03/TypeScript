
/**2) Write two function in typescript and one of them accepts a another function 
 as a parameter(callback function).
For example:
one function name "fun1" and second function name "fun2".
function fun1 takes first parameter as a string and second parameter as function.
like this function fun1(str, callback)
and function fun2 just print simple string like "Hello World!"
so if we call fun1("prominentpixel", fun2)
then output must be:
prominentpixel
Hello World**/


function fun2 (){
    console.log('Hello world!')
}

function fun1(str:string,callback:Function){
    console.log(str)
    callback();
}

fun1("prominentpixel",fun2)