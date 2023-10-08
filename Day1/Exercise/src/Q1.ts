const button = document.querySelector('button')!;
const input = document.querySelector('input');


const findMaxWord = (i:string)=>{

    let s =i.split(" ");

    const result = s.reduce((prevWord, currWord) => {
        if (prevWord.length > currWord.length) return prevWord;
        return currWord;
    });
 
   alert(`The long world from the sentence: ${result}`)
}


const clickhandler = () => {
     if(input){
        findMaxWord(input.value.toString())
     }
}



button.addEventListener('click',clickhandler);