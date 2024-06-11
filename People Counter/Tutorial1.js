let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEL.textContent = count
}

function save() {
    saveString = count + " - "
    saveEL.textContent += saveString
    countEL.textContent = 0
    count = 0
}