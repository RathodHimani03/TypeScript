function generateError(message:string,code:number):never{

    throw{message:message, errorCode:code}
    //when using the infinite loop
}

generateError('An error occured', 500)