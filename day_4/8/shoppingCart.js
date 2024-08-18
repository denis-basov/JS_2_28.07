// модуль с корзиной

const cart = [];
const shipCost = 10;

export default function(product, qty){
    cart.push({product, qty});
    console.log(`${product} ${qty} добавлен в корзину`);    
};
