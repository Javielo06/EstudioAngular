import  { type Product } from './6-function-destructuring';
import {  taxCalculator } from './6-function-destructuring';



const shoppingCart: Product [] = [

    {
        description: 'Nokia 3310',
        price: 100
    },
    {
        description: 'iPad',
        price: 150.0
    }
];


const [total, Tax] = taxCalculator({products: shoppingCart, tax: 0.15});

console.log('Total: ', total);
console.log('Tax: ', Tax);


