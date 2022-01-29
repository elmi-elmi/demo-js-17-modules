
console.log('shopping cart')
console.log('start fetching user');

const res = await fetch('https://jsonplaceholder.typicode.com/users');
console.log('finish')


export const addToCart = function(product, quantity){
    console.log(product,quantity)
}

