// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself and the last two added by 10.
//  Return the array with the new values
const numbers = [4,10,3,89,2,3,12,56,2]
function multiply(){
    numbers.forEach((num,index) =>{
        if(index < 4){
            numbers[index] = num * num;
        }
        else if(index >= numbers.length -2){
            numbers[index] = num + 10;
        }
    });
    console.log(numbers);

}
multiply()


// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index 
// :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9]
let m = 0
while(m < arrNum.length){
    if (m == 4){
        break;
    }
    console.log(arrNum[m]);
    m++
}

// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:
//   let fruits= ['apple','plum','banana','strawberries','kiwi']
let Fruits = ['Apple','plum','Banana','Strawberries','Kiwi']
const fruits = (fruits) =>{
    for(let i = 0; i <Fruits.length; i++){
        if(i<fruits.length){
        }
        
    }
    Fruits = fruits[2]
    return fruits
}
console.log(fruits(fruits));