// const numbers = new Array(10,20,30,40,50)
// const sum = numbers.reduce((total,num)=>total + num,0)

// console.log(numbers,sum)

// const alphabets = new Array(5)
// console.log(alphabets)

// console.log(alphabets.push('a','b','c','d','e'));
// console.log(alphabets);

// const deletedNum = numbers.splice(1,2,70,90)
// console.log(deletedNum)
// console.log(numbers)

// console.log(numbers.slice(2,4))

// console.log([...numbers])


// REST operator
// function sum (...numbers) {
//     return numbers.reduce((total,num)=>total+num,0)
// }

// console.log(sum(1,2,3,4))

// const [first, second, ...rest] = [1,2,3,4,5,6,7]

// console.log(first);
// console.log(second);
// console.log(rest);

// const {name, gender, ...details} = {name:'John', gender:'Male', age:24, salary:25000}

// console.log(name)
// console.log(gender)
// console.log(details)

const employee = JSON.stringify({name:'John', gender:'Male', age:24, salary:25000})
console.log(employee);

const parsedEmployee = JSON.parse(employee)
console.log(parsedEmployee);

