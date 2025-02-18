let index = 0;
const text = document.querySelectorAll(".carousel__container p.quotes");
const total = text.length;
const carousel = document.getElementById("carousel__container");
const indicators = document.querySelectorAll(".indicator");

document.getElementById("next").addEventListener("click", function() {
    index = (index + 1) % total;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", function() {
    index = (index - 1 + total) % total;
    updateCarousel();
});

indicators.forEach(indicator => {
    indicator.addEventListener("click", function() {
        index = parseInt(this.dataset.index);
        updateCarousel();
    });
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}vw)`;
    indicators.forEach(ind => ind.classList.remove("active"));
    indicators[index].classList.add("active");
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})