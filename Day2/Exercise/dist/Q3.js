/**3) Write a function called calculateSalePriceAndTotals()
which returns an array with new two new keys (salePrice and total).
The key 'salePrice' equals the calculated sale price based on the original
price and the discount. The key 'total' equals the computed total based on
stock, the original price and the discount.
Note: must use object Destructuring in function calculateSalePriceAndTotals()
and default discount is 0.0

products = [
  { name: 'Mobile', stock: 3, original: 4000 },
  { name: 'Laptop', stock: 1, original: 10000, discount: 0.1 },
  { name: 'Mouse', stock: 4, original: 299.99 },
  { name: 'Keyboard', stock: 1, original: 299.99, discount: 0.8 },
  { name: 'Headphone', stock: 2, original: 199.99, discount: 0.65 }
];**/
function calculateSalePriceAndTotals(obj) {
    //object destructuring
    const { name, stock, original, discount } = obj;
    let sale, total;
    let newdiscount = discount !== null && discount !== void 0 ? discount : 0.0;
    sale = original - (newdiscount * original);
    total = sale * stock;
    obj['sale'] = sale;
    obj['total'] = total;
    return obj;
}
let products = [
    { name: 'Mobile', stock: 3, original: 4000 },
    { name: 'Laptop', stock: 1, original: 10000, discount: 0.1 },
    { name: 'Mouse', stock: 4, original: 299.99 },
    { name: 'Keyboard', stock: 1, original: 299.99, discount: 0.8 },
    { name: 'Headphone', stock: 2, original: 199.99, discount: 0.65 }
];
for (let i of products) {
    console.log(calculateSalePriceAndTotals(i));
}
/** output:
 [
   {
     name: "Mobile",
     original: 4000,
     sale: 4000,
     stock: 3,
     total: 12000
   },
   {
     discount: 0.1,
     name: "Laptop",
     original: 10000,
     sale: 9000,
     stock: 1,
     total: 9000
   },
   {
     name: "Mouse",
     original: 299.99,
     sale: 299.99,
     stock: 4,
     total: 1199.96
   },
   {
     discount: 0.8,
     name: "Keyboard",
     original: 299.99,
     sale: 59.99799999999999,
     stock: 1,
     total: 59.99799999999999
   },
   {
     discount: 0.65,
     name: "Headphone",
     original: 199.99,
     sale: 69.9965,
     stock: 2,
     total: 139.993
   }
 ]**/ 
