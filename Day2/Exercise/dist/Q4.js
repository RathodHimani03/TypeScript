// 4)Create one class named Product with id, name, amount, stock as 
// private properties, and getters, setter and create one method 
// named two methods increaseStock(quantity), decreaseStock(quantity).
// increaseStock method does increase stock with given quantity and 
// decreaseStock method decrese stock with given quantity.
// Create three objects of Product class and, assign values as you want 
// to these objects.  Done
class Product {
    constructor(id, name, amount, stock) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.stock = stock;
    }
    set product(value) {
        this.name = value;
    }
    incementStock(istock) {
        this.stock += istock;
    }
    decrementStock(dstock) {
        if (this.stock != 0) {
            this.stock -= dstock;
        }
    }
    get productInfo() {
        return {
            id: this.id,
            name: this.name,
            amount: this.amount,
            stock: this.stock
        };
    }
}
let prod1 = new Product(1, 'pencil', 10, 3);
prod1.product = 'chocolate';
prod1.decrementStock(3);
prod1.incementStock(10);
let infoObj1 = prod1.productInfo;
console.log(infoObj1);
let prod2 = new Product(2, 'bench', 15, 8);
prod2.product = 'chalk';
prod2.decrementStock(3);
prod2.incementStock(10);
let infoObj2 = prod2.productInfo;
console.log(infoObj2);
let prod3 = new Product(3, 'bottle', 28, 6);
prod3.product = 'bag';
prod3.decrementStock(13);
prod3.incementStock(10);
let infoObj3 = prod3.productInfo;
console.log(infoObj3);
