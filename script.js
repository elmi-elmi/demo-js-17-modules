import { addToCart } from "./shopingCart.js";
console.log("script");
// addToCart('bread',2)
//
// console.log('before await')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
//
// console.log(data)
// console.log('after await')

// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//
//     return  {tilte:data.at(-1).title, text:data.at(-1).body}
//
// }

// const lastPost = await getLastPost();
//
// console.log(lastPost)
//
// const lastPost = getLastPost();
// lastPost.then(last=>console.log(last))

// const lastPost = getLastPost();
// const d = await Promise.resolve(lastPost)
// console.log('---',d)
// const a = 2;
// const shoppingCart2 = (function () {

//   const card = [];
//   const shoppingCost = 20;
//   const x = 123;
//
//   const addToCart = function (product, quantity) {
//     console.log("add to cart", product, quantity);
//   };
//
//   const orderStock = function (product, quantity) {
//     console.log("order stock", product, quantity);
//   };
//
//   return { addToCart, card, x };
// })();
//
// shoppingCart2.addToCart('hi', 11111);


