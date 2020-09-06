const numbers = [2,4,6,3,5,7,8];
// const output =  [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result)    
// }

// const result = numbers.map(function(ele){
//     return ele * ele;
// })
// const result = numbers.filter(element => element >5);
const result = numbers.find(element => element >5)
console.log(result)