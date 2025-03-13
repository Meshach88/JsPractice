// Arrays are data structures used to hold more than one item.
// 1. Creating an array
// 2. Looking inside an array
// 3. Array methods

// Creating Arrays
// 1. Using Array literals
const names = ["John", "Jacob", "Sarah", "Bitrus", "Angelo"]
console.log(names);
// 2. Using the new Array()
const car_brands = new Array("Toyota","Honda","Mercedes","BMW","Nissan")
console.log(car_brands);

// Accessing/Modifying array items (looking inside arrays)
// zero-based indexing
console.log(names[2])
console.log(car_brands[1])

names[3] = "Peter"
console.log(names);

// Array Methods
// push - to add an item to the end of an array. It returns the new length of the array
names.push("Samuel","Ahania","Lizzy") 
console.log(names);

// pop - to remove the last item in an array. It returns the popped item.
console.log(names.pop())
console.log(names)

// shift - to remove the first item in an array. It returns the removed item.
names.shift()
console.log(names)

// unshift - to add an item to the beginning of the array. It returns the new length of the array
names.unshift("Anthony")
console.log(names);

// Assignment - Make a comparison between the 4 methods - push, pop, shift and unshift

