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
function numbers(){
let arrNum = [1,2,3,4,5,6,7,8,9]
arrNum.forEach(l =>{
    while(arrNum < 4){break;}
    console.log(arrNum);
});
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

// Write a function that accepts an array of strings and console.logs each element using a for loop.
list = ["pen","book","pensil","ink"]
function arraysOfStrings(){
    for(let i = 0; i < list.length; i++){
        console.log(list[i]);
    }
}
arraysOfStrings()


// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
 Name = ["Wonderful"]
function reverseString(){
    let m = string.split("").reverse().join("")
    while(m){
        console.log(m);
        break;
    }
}