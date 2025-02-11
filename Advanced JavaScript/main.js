// Nested Scope

// let a = 10

// function outer () {
//     let b = 20
//     function inner () {
//         let c = 30
//         console.log(a,b,c);
//     }
//     inner()
// }
// outer()

// Closure - is created when a function returns another function
function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner    // it returns the function inner with its scope (scope variable; counter) thus forming a closure.
}

const fn = outer()
fn()
fn()  //remembers the counters value