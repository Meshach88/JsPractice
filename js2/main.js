// Loops in JavaScript
// We use loops when we need to repeat an action

// username = "Antonio"

// console.log(username[0]);
// console.log(username[1]);
// console.log(username[2]);
// console.log(username[3]);
// // console.log(username[4]);
// // console.log(username[5]);
// // console.log(username[6]);


// For loop
// For statement
// for (let i=0; i<username.length;i++){
//     console.log(username[i])
// }

// for...in statement
const username = 'Napoleon'

// for (let i in username){
//     console.log(i) 
// }

// for...of statement
// for (let i of username){
//     console.log(i)
// }


// While loop
// let x = 1
// while (x < 5) {
//     console.log(x)
//     x++
// }

// let i = 10
// while (i > 2) {
//     console.log(i)
//     i--
// }

// do while loop
// let x = 1
// do {
//     console.log(x)
//     x++
// } while(x<5)


// Write a program that calculates the sum of all even numbers from 1 to 20 using a while loop.

number = 1
sum = 0
while (number <= 20) {
    if (number % 2 == 0) {
        sum = sum + number
    }
    number++
}
console.log(sum)






