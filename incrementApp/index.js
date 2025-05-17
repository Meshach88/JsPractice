let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0 


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

function clearEntries() {
    console.log('Clear entries button clicked')
    saveEl.textContent = 'Previous Entries: '
    countEl.textContent = 0
    count = 0
}

function undoEntry() {
    saveEl.textContent = saveEl.textContent.slice(0,-4)
}

// let button = document.getElementById('clear-btn')
// button.addEventListener('click', clearEntries)


console.log(countEl)
console.log(count)
console.log(saveEl)