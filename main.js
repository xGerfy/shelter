let position = 0
const slidesToShow = 3
const slidesToScroll = 1
const container = document.querySelector('.slider__container')
const track = document.querySelector('.slider__track')
const btnPrev = document.querySelector('.button__slider-prev')
const btnNext = document.querySelector('.button__slider-next')
const items = document.querySelectorAll('.slider__item')
const itemsCount = items.length
const itemWidth = 270
const movePosition = slidesToScroll * (itemWidth + 90)

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * (itemWidth + 90)) / (itemWidth + 90)

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + 90)

    setPosition()
    checkBtns()
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / (itemWidth + 90)

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + 90);

    setPosition()
    checkBtns()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
    btnPrev.disabled = position === 0
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * (itemWidth + 90)
}

checkBtns()