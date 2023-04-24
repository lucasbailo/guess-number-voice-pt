const bottomNumber = 1
const topNumber = 1000
const randomNumber = createNumber()



function createNumber() {
    return parseInt(Math.random() * topNumber + 1)
}

console.log(randomNumber)

const idbottomNumber = document.getElementById("menor-valor")
idbottomNumber.innerHTML = bottomNumber

const idtopNumber = document.getElementById("maior-valor")
idtopNumber.innerHTML = topNumber