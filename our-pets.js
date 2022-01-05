const arr = [
    {
        src: 'img/all-pets/pets-charly.png',
        name: 'Charly'
    },
    {
        src: 'img/all-pets/pets-freddie.png',
        name: 'Freddie'
    },
    {
        src: 'img/all-pets/pets-jennifer.png',
        name: 'Jennifer'
    },
    {
        src: 'img/all-pets/pets-katrine.png',
        name: 'Katrine'
    },
    {
        src: 'img/all-pets/pets-scarlett.png',
        name: 'Scarlett'
    },
    {
        src: 'img/all-pets/pets-sophia.png',
        name: 'Sophia'
    },
    {
        src: 'img/all-pets/pets-timmy.png',
        name: 'Timmy'
    },
    {
        src: 'img/all-pets/pets-woody.png',
        name: 'Woody'
    },
    {
        src: 'img/all-pets/pets-charly.png',
        name: 'Charly2'
    },
    {
        src: 'img/all-pets/pets-freddie.png',
        name: 'Freddie2'
    },
    {
        src: 'img/all-pets/pets-jennifer.png',
        name: 'Jennifer2'
    },
    {
        src: 'img/all-pets/pets-katrine.png',
        name: 'Katrine2'
    },
    {
        src: 'img/all-pets/pets-scarlett.png',
        name: 'Scarlett2'
    },
    {
        src: 'img/all-pets/pets-sophia.png',
        name: 'Sophia2'
    },
    {
        src: 'img/all-pets/pets-timmy.png',
        name: 'Timmy2'
    },
    {
        src: 'img/all-pets/pets-woody.png',
        name: 'Woody2'
    },
    {
        src: 'img/all-pets/pets-charly.png',
        name: 'Charly3'
    },
    {
        src: 'img/all-pets/pets-freddie.png',
        name: 'Freddie3'
    },
    {
        src: 'img/all-pets/pets-jennifer.png',
        name: 'Jennifer3'
    },
    {
        src: 'img/all-pets/pets-katrine.png',
        name: 'Katrine3'
    },
    {
        src: 'img/all-pets/pets-scarlett.png',
        name: 'Scarlett3'
    },
    {
        src: 'img/all-pets/pets-sophia.png',
        name: 'Sophia3'
    },
    {
        src: 'img/all-pets/pets-timmy.png',
        name: 'Timmy3'
    },
    {
        src: 'img/all-pets/pets-woody.png',
        name: 'Woody3'
    },
]


const createChunks = (items, size) => {
    const chunks = []

    const localItems = JSON.parse(JSON.stringify(items))

    while (localItems.length > 0) {
        chunks.push(localItems.splice(0, size))
    }

    return chunks
}

let cardsPerPage = 8

if (window.screen.width <= 320) {
    cardsPerPage = 3
    let orgHtml = document.querySelector('.menu')
    const oldParent = orgHtml.parentNode;
    let burger = document.createElement('div')
    burger.classList.add('menu__burger')
    oldParent.replaceChild(burger, orgHtml)
    burger.appendChild(orgHtml)
    const burgerBtn = document.createElement('button')
    burgerBtn.classList.add('burgerBtn')
    burgerBtn.innerHTML = `<img src="img/Burger-ourpets.png" class = "burger__btn-img">`;
    orgHtml.before(burgerBtn)
}

const btn = document.querySelector('.burgerBtn')
if (btn) {
    const burger = document.querySelector('.menu')
    btn.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        btn.classList.toggle('_active')
        burger.classList.toggle('_active')
    })
}

const chunks = createChunks(arr, cardsPerPage)

const renderCards = (cardList) => {
    const cardsWrapper = document.querySelector('.our__pets-cards')
    cardsWrapper.innerHTML = ''
   
    for (let index = 0; index < cardList.length; index++) {
        const element = cardList[index];

        const card  = document.createElement('div')
        card.className = 'slider__item'

        const cardImg = document.createElement('img')
        cardImg.src = element.src
        cardImg.alt = ''

        const cardName = document.createElement('p')
        cardName.className = 'card__name'
        cardName.innerHTML = element.name

        const cardBtn = document.createElement('button')
        cardBtn.className = 'card__btn'
        cardBtn.innerHTML = 'Learn more'

        card.appendChild(cardImg)
        card.appendChild(cardName)
        card.appendChild(cardBtn)

        cardsWrapper.appendChild(card)
    }
}
const prevBtn = document.querySelector('.btn__prev')
const startBtn = document.querySelector('.btn__start')
const nextBtn = document.querySelector('.btn__next')
const endBtn = document.querySelector('.btn__end')

const showPage = (action) => {
    const currentPageNode = document.querySelector('.btn__number')
    const currentPage = +currentPageNode.innerHTML

    let newPage = 1

    if (action === 'prev') {
        newPage = currentPage - 1
    } else if (action === 'next') {
        newPage = currentPage + 1
    } else if (action === 'end') {
        newPage = chunks.length
    }

    console.log(newPage)

    if (newPage === 1) {
        prevBtn.classList.add('btn-disabled')
        startBtn.classList.add('btn-disabled')
    } else {
        prevBtn.classList.remove('btn-disabled')
        startBtn.classList.remove('btn-disabled')
    }

    if (newPage === chunks.length) {
        nextBtn.classList.add('btn-disabled')
        endBtn.classList.add('btn-disabled')
    } else {
        nextBtn.classList.remove('btn-disabled')
        endBtn.classList.remove('btn-disabled')
    }
    

    currentPageNode.innerHTML = newPage
    renderCards(chunks[newPage - 1])
}

showPage()


prevBtn.addEventListener('click', () => { showPage('prev') })
startBtn.addEventListener('click', () => { showPage() })


nextBtn.addEventListener('click', () => { showPage('next') })
endBtn.addEventListener('click', () => { showPage('end') })
