"use strict";
console.log('This is new file ');
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome"));
}
