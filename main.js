let position = 0
let slidesToShow = 3
const slidesToScroll = 1
const container = document.querySelector('.slider__container')
const track = document.querySelector('.slider__track')
const btnPrev = document.querySelector('.button__slider-prev')
const btnNext = document.querySelector('.button__slider-next')
const items = document.querySelectorAll('.slider__item')
const itemsCount = items.length
const itemWidth = 270
let beetwen = 90


if (window.screen.width <= 320) {
    let orgHtml = document.querySelector('.menu')
    const oldParent = orgHtml.parentNode;
    let burger = document.createElement('div')
    burger.classList.add('menu__burger')
    oldParent.replaceChild(burger, orgHtml)
    burger.appendChild(orgHtml)
    const burgerBtn = document.createElement('button')
    burgerBtn.classList.add('burgerBtn')
    burgerBtn.innerHTML = `<img src="img/Burger.png" class = "burger__btn-img">`;
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


if (window.screen.width <= 768) {
    beetwen = 40
    slidesToShow = 2
}

if (window.screen.width <= 320) {
    beetwen = 0
    slidesToShow = 1
}

const movePosition = slidesToScroll * (itemWidth + beetwen)

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * (itemWidth + beetwen)) / (itemWidth + beetwen)

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + beetwen)

    setPosition()
    checkBtns()
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / (itemWidth + beetwen)

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + beetwen);

    setPosition()
    checkBtns()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
    btnPrev.disabled = position === 0
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * (itemWidth + beetwen)
}

checkBtns()