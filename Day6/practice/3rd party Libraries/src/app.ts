import "reflect-metadata"
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";
const products = [
    {title:'A Carget',price:29.99},
{title:'A Book',price:10.99}]

const newProd = new Product('',-5.88)
validate(newProd).then(error =>{
    if(error.length > 0){
        console.log('Validation Error! ');
        console.log(error);
    }
    else{
        console.log(newProd.getInformation())
    }
});//return promise 
console.log(newProd.getInformation())

// const p1 = new Product('A Book',12.99);

// const loadProducts = product.map(prod=>{
//     return new Product(prod.title,prod.price)
// })

const loadProducts = plainToClass(Product,products)
for(const prod of loadProducts){
    console.log(prod.getInformation())
}