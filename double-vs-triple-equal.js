// == will not check data type
const first = 1;
const second = true;
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

const first2 = 1;
const second2 = '1';
if(first2 == second2){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// === will check data type
const first1 = 1;
const second1 = true;
if(first1 === second1){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}