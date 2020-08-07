let bonus = 20;
function sum(first ,second){
    let result = first + second + bonus;
    if(result > 9){
        var mood = 'happy'; // if was 'let' get error
        mood = " sad";
        mood = 'funky'
    }
    console.log(mood);
    return result;
}
console.log(day);
var day = 'friday'; // can't pass value up 
const add = sum(7, 3);
console.log(add);
