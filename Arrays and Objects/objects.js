// // Objects
// // An objects have key-value pairs

// const person = {name: "John",
//     age: 30,
//     gender: "Male",
// }

// const car = new Object()
// car.brand = "Toyota"
// car.model = "Camry"
// car.year = 2004

// console.log(car)

// const car1 = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2004
// }
// console.log(car1)

// // Access the properties of an object
// // We do so using the dot notation

// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)

// // We can also use square bracket notation
// console.log(person["name"])
// console.log(person["age"])
// console.log(person["gender"])


// // Modifying properties of Objects
// person.name = "Samuel"
// person['age'] = 45

// console.log(person)

// // Adding properties to Objects
// person.status = "Married"

// console.log(person)


// // Delete properties from Objectcs

// delete person.age

// console.log(person)


// OBJECT METHODS
// Methods are like functions. The difference is that methods are defined inside objects.

const person = {
    name: 'Meshach',
    age: 30,
    greet() {
        console.log("Hello, my name is", this.name)
    }
}
// person.greet()

// Checking for Property Existence
// in operator
// console.log("name" in person)
// console.log("weight" in person)

// hasOwnProperty Method
// console.log(person.hasOwnProperty("age"))
// console.log(person.hasOwnProperty("height"))


// Iterating Over Object Properties
// 1. Using for...in
// for (let key in person) {
//     console.log(key, ":", person[key])
// }

// 2. Using Object.keys()
// console.log(Object.keys(person));

// 3. Using Object.values()
// console.log(Object.values(person))

// 4. Using Object.entries()
// console.log(Object.entries(person))