// getting square of array's element
// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// another way to get square of array element by using map
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

// short way by using arrow function with map
const numbers1 = [3, 4, 5, 6, 7, 8];
const result1 =numbers1.map(x => x * x);
console.log(result1);

//filter 
const numbers2 = [3, 4, 5, 6, 7, 8];
const bigger = numbers2.filter(x => x > 5);
const bigger2 = numbers2.filter(x => x < 5);
console.log(bigger);
console.log(bigger2);

//find
const numbers3 = [3, 4, 5, 6, 7, 8];
const isThere = numbers3.find(x => x > 5);
console.log(isThere);