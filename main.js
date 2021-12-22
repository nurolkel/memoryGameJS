document.addEventListener('DOMContentLoaded', () => {
    
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ];

    cardArray.sort(()=> 0.5 - Math.random())

    const matchEl = document.querySelector('#match')
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];


    function createCard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard);

            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId);
        console.log(cardId)
        console.log(cardsChosen, cardsChosenId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    git remote add origin https://github.com/nurolkel/memoryGameJs.git
    git branch -M main
    git push -u origin main
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
      
        let optionOneId = cardsChosenId[0];
        let optionTwoId = cardsChosenId[1];
        
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            matchEl.textContent = 'You have clicked the same image!'
        } else if (cardsChosen[0] === cardsChosen[1]) {
            matchEl.textContent = "You Found A Match!"
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            matchEl.textContent = "Sorry, try again"
        }

        cardsChosen = [];
        cardsChosenId = [];
        console.log(cardsChosen, cardsChosenId)
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You Win"
        }
    }

    createCard();
})

console.log("it works")