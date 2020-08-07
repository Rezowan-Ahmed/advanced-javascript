// way no-1
let name;
console.log(name);

// way no-2.. if function doesn't have return
function add(num1, num2){
    console.log(num1 + num2);
    // return  // if we will just write return it will give undefined also coz what we will return didn't defined 
}
const result = add(13, 82);
console.log(result);

// way no-3.. if we don't pass parameter
function add2(num1, num2){
    console.log(num1, num2);
  
}
const result2 = add2(13);
console.log(result2);

//way no-4
const object = {name: "smart glue", phone: 11111};
console.log(object.gf);

//way no-5
let ages = [5, 6, 2];
console.log(ages[11]);