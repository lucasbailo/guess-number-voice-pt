## Welcome! 👋

# Guessing Game

This is a code from [Alura](https://www.alura.com.br). In this course, I learned how to manipulate DOM with JavaScript.

### Screen Shots
- First View!
![](./images/First%20View.png)

- Wrong number:
![](./images/Wrong%20number.png)

- Invalid guess:
![](./images/Invalid%20guess.png)

- Correct guess:
![](./images/Correct%20Guess.png)

- Game Over:
![](./images/Game%20Over.png)

## Some code that I'm proud of
```js
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
}
```

## Built with

- Semantic HTML5;
- CSS custom properties;
- Color hunt;
- JavaScript;
- Speech Recognition.

## Test the project yourself: [Teste the project here!!!](https://guess-number-voice-pt.vercel.app/)

### You can:

- Say a number to try to guess the secret number;
- End the game by saying "Fim de jogo" - the english version will be released soon;
- Receive hints about your guess;
- Play again when you say the right guess;
- See the answer by acessing the console and test the hints.

## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)