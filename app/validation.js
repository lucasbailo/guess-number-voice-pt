function guessValidation(guess) {
    const numberInt = + guess

    if (isntNumber(numberInt)) {

        if (guess.toUpperCase() === "FIM DE JOGO") {
            document.body.innerHTML = `
                <h1 class="error">Fim de Jogo</h2>
                <button id="play-again" class="play-button">Jogar Novamente</button>
            `
        } else {
            guessElement.innerHTML += '<div class="error">Valor inválido!</div>'
            return
        }
    }

    else if (isBetween(numberInt)) {
        guessElement.innerHTML += `<div class="error"> → Valor inválido: Fale um número entre ${bottomNumber} e ${topNumber} ←</div>`
        return
    }

    if (numberInt === randomNumber) {

        document.body.innerHTML = `
            <h1 class="right">Você acertou!</h2>
            <h3 class="right">O valor era ${randomNumber} </h3>
            <button id="play-again" class="play-button">Jogar Novamente</button>
        `
    } else if (numberInt < randomNumber) {
        guessElement.innerHTML += `<div class="hint"> → O número secreto é maior <i class="fa-solid fa-up-long"></i> ←</div>`
    } else if (numberInt > randomNumber) {
        guessElement.innerHTML += `<div class="hint"> → O número secreto é menor <i class="fa-solid fa-down-long"></i> ←</div>`
    }

    if (guess == "Fim de Jogo") {
        document.body.innerHTML = `
            <h1 class="right">Fim de Jogo</h2>
            <button id="play-again" class="play-button">Jogar Novamente</button>
        `
    }
}


function isBetween(numberInt) {
    return numberInt > topNumber || numberInt < bottomNumber
}

function isntNumber(numberInt) {
    return Number.isNaN(numberInt)
}

document.body.addEventListener('click', e=> {
    if(e.target.id == 'play-again') {
        window.location.reload()
    }
})