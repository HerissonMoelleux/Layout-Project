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