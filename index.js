const a = document.querySelector('.inp')
const buttons = a.getElementsByTagName('button')
const win = document.getElementById('win')
const blockimage = document.querySelector('.visel')
const misstxt = document.getElementById('miss')
const lose = document.getElementById('lose')
const restart = document.getElementById('restart')
const wordDisplay = document.getElementById('word-display')
const slovar = [
    "Яблоко",
    "Агония",
    "Ангина",
    "Аншлаг",
    "Аффект",
    "Блузка",
    "Балбес",
    "Базука",
    "Бандит",
    "Бампер",
    "Банкет",
    "Валюта",
    "Вампир",
    "Ваниль",
    "Варвар",
    "Варщик",
    "Газета",
    "Галера",
    "Гамоши",
    "Гвоздь",
    "Дворец",
    "Декада",
    "Движок",
    "Десерт",
    "Еретик",
    "Жалоба",
    "Жаргон",
    "Желудь",
    "Жертва",
    "Нянька",
    "Нокаут",
    "Невежа",
    "Обжора",
    "Облако",
    "Обойма",
    "Одежда",
    "Одеяло",
    "Магнит",
    "Маньяк",
    "Машина",
    "Мебель",
    "Палица",
    "Партер",
    "Провод",
    "Прыжок",
    "Тайфун",
    "Тайник",
    "Талант",
    "Танцор",
    "Травма",
    "Кабель",
    "Кабина",
    "Кузнец",
    "Кувшин",
    "Кружка",
    "Кредит",
]
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
function updateDisplay(){
    wordDisplay.textContent = displayLetters.join(' ');
}

let displayLetters = []
let misstake = 0
let letter = []
let matchingletters = []

const word = slovar[getRandomInt(slovar.length)]

for(let i = 0; i < word.length;i++){
    displayLetters.push('_');
}

updateDisplay();
for(let i = 0; i < buttons.length; i++){
    let button = buttons[i]

    button.addEventListener('click', function(event){

        let addLetter = false
        let value = button.innerText

        letter.push(value)
        button.classList.add('non_active')

        for(let j = 0; j < word.length; j++){
            if(word[j].toLowerCase() === value.toLowerCase()){
                matchingletters.push(word[j])
                addLetter = true
                displayLetters[j] = word[j];
            }
        }
        updateDisplay();

        if(addLetter == false){
            misstake += 1
        }
        switch(misstake){
            case 1:{
                blockimage.children[0].classList.remove('active')
                blockimage.children[0].classList.add('non_active')
                blockimage.children[1].classList.add('active')
                misstxt.innerText = 'Попытки: 1/6'
                break;
            }
            case 2:{
                blockimage.children[1].classList.remove('active')
                blockimage.children[2].classList.add('active')
                misstxt.innerText = 'Попытки: 2/6'
                break;
            }
            case 3:{
                blockimage.children[2].classList.remove('active')
                blockimage.children[3].classList.add('active')
                misstxt.innerText = 'Попытки: 3/6'
                break;
            }
            case 4:{
                blockimage.children[3].classList.remove('active')
                blockimage.children[4].classList.add('active')
                misstxt.innerText = 'Попытки: 4/6'
                break;
            }
            case 5:{
                blockimage.children[4].classList.remove('active')
                blockimage.children[5].classList.add('active')
                misstxt.innerText = 'Попытки: 5/6'
                break;
            }
            case 6:{
                blockimage.children[5].classList.remove('active')
                blockimage.children[6].classList.add('active')
                misstxt.innerText = 'Попытки: 6/6'
                a.classList.remove('active')
                a.classList.add('non_active')
                lose.classList.add('active')
                lose.innerText = `Вы проиграли! Слово: ${word}`
                restart.classList.add('active');

                break;
            }
        }

        if (matchingletters.length === word.length && word.split('').every(char => matchingletters.includes(char))) {
            a.classList.remove('active')
            a.classList.add('non_active')
            win.classList.add('active');
            win.innerText = `Вы выиграли! Слово: ${word}`
            restart.classList.add('active');
        }
    })
}

