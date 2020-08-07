// Falsy

//false
// 0
// ""
// undefined
// null
// NaN

// Truthy

// '0'
// " "
// []
// {}

let name = ""
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

let array = [];
if(array){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// 0 is negative not positive 

let tf = 0;  // 0 will go tf == 0 coz it's or condition . so if extend 0 will be another number it will go to tf and will be true
if(tf || tf == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}