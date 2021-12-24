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

const chunks = createChunks(arr, 8)
const currentPageNode = document.querySelector('.btn__number')
const pageNum = +currentPageNode.innerHTML

const showPage = (page) => {
    currentPageNode.innerHTML = page
    console.log(chunks[page - 1]);
}
showPage(pageNum)

const prevBtn = document.querySelector('.btn__prev')
prevBtn.addEventListener('click', () => {showPage(pageNum - 1)})

const nextBtn = document.querySelector('.btn__next')
nextBtn.addEventListener('click', () => {showPage(pageNum + 1)})


