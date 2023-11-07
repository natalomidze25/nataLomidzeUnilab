const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');
const prevCardButtons = document.querySelectorAll('.prev-card');
const nextCardButtons = document.querySelectorAll('.next-card');

const cardContainer = document.getElementById('cardContainer');
const cardData = [
    {
        imgSrc: 'unilab-photos/nature.jpg',
        title: 'Dolore magna aliqua',
        description1: 'Dolore magna aliqua Dolore magna aliqua',
        description2: '2 min ago'
    },
    {
        imgSrc: 'unilab-photos/nature2.png',
        title: 'morbe elefend a libero',
        description1: 'morbe elefend a libero Dolore magna aliqua',
        description2: '1 hour ago'
    },
    {
        imgSrc: 'unilab-photos/umbrela.png',
        title: 'morbe elefend a libero',
        description1: 'morbe elefend a libero morbe elefend a libero ',
        description2: '2 min ago'
    },
    {
        imgSrc: 'unilab-photos/nature.jpg',
        title: 'Dolore magna aliqua',
        description1: 'Dolore magna aliqua Dolore magna aliqua',
        description2: '2 min ago'
    },
    {
        imgSrc: 'unilab-photos/el.png',
        title: 'Dolore magna aliqua',
        description1: 'Dolore magna aliqua Dolore magna aliqua',
        description2: '2 min ago'
    },
    {
        imgSrc: 'unilab-photos/discover.png',
        title: 'Dolore magna aliqua',
        description1: 'Dolore magna aliqua Dolore magna aliqua',
        description2: '2 min ago'
    },
];

let currentIndex = 0;
let currentCardIndex = 0;

generateCards()
const sliderCard = document.querySelector('.sliderCard');
const slidesCard = document.querySelectorAll('.slide-card');

const navbar = document.getElementById('navBarCont');


prevButtons.forEach(x => {
    x.addEventListener('click', () => showSlide(currentIndex - 1));
})

nextButtons.forEach(x => {
    x.addEventListener('click', () => showSlide(currentIndex + 1));
})

prevCardButtons.forEach(x => {
    x.addEventListener('click', () => showCardSlide(currentCardIndex - 1));
})

nextCardButtons.forEach(x => {
    x.addEventListener('click', () => showCardSlide(currentCardIndex + 1));
})


showSlide(currentIndex);

importNavBar();

function generateCards() {

    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.classList.add('slide-card');


        const imgElement = document.createElement('img');
        imgElement.src = card.imgSrc;
        imgElement.classList.add('card-img')

        const h2Element = document.createElement('h2');
        h2Element.textContent = card.title;
        h2Element.classList.add('h2')

        const p1Element = document.createElement('p');
        p1Element.textContent = card.description1;
        p1Element.classList.add('p1')

        const p2Element = document.createElement('p');
        p2Element.textContent = card.description2;
        p1Element.classList.add('p2')


        cardElement.appendChild(imgElement);
        cardElement.appendChild(h2Element);
        cardElement.appendChild(p1Element);
        cardElement.appendChild(p2Element);

        cardContainer.appendChild(cardElement);
    })
}


function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

function showCardSlide(index) {
    if (index < 0) {
        index = slidesCard.length - 1;
    } else if (index >= slidesCard.length) {
        index = 0;
    }
    const slideWidth = slidesCard[0].offsetWidth + 36;
    sliderCard.style.transform = `translateX(-${index * slideWidth}px)`;
    currentCardIndex = index;
}

