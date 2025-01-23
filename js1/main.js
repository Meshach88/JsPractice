// Write a program to receive the name of a person. If the first letter of the name is "M", your program should print "You are a Merovingian" to the console, else if the first letter of the name is 'U', it should print "You live in an urban area", else it should print "you are unknown"

let username = prompt("What is your name? ")

if (username[0] == 'M'){
    console.log('You are a Merovingian')
}
else if (username[0] == 'U') {
    console.log('You live in an urban area')
}
else {
    console.log('You are unknown')
}