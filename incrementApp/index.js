let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0 
let savedCounts = [];


function increment(){
    count += 1  //count = count + 1
    countEl.innerText = count
}

function save(){
    let countStr = count + ' - '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clear() {
    saveEl.textContent = 0
}


console.log(countEl)
console.log(count)
console.log(saveEl)