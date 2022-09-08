let menu = document.querySelector(".bar-menu");
let navbar_link = document.querySelector(".navbar");
let image = document.querySelector(".img-slider");
let forward = document.querySelector(".forward");
let backward = document.querySelector(".bacward");



menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar_link.classList.toggle("active");
});
 

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar_link.classList.remove("active");
}

document.querySelector(".icons .search-icon").addEventListener("click", () => {
    document.querySelector(".form-search").classList.toggle("active");
})

document.querySelector(".fa-times").addEventListener("click", () => {
    document.querySelector(".form-search").classList.remove("active");
})

// Image Slider for Landing Section
let images = [
    './images/puzzi.jpg',
    './images/rice.jpg',
    './images/dish1.jpg',
    './images/spicy.png',
];

let currentImage = 0;

function imgSlider() {
    image.src = images[currentImage];
}

window.addEventListener("DOMContentLoaded", imgSlider);

forward.addEventListener("click", () => { 
    currentImage++;
    if (currentImage > images.length - 1) {
        currentImage = 0;
    }
    imgSlider(currentImage);
});

backward.addEventListener("click", () => { 
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    imgSlider(currentImage);
});

// Get Date 
let year = document.querySelector(".year");
let date = new Date();
let year22 = date.getFullYear();
year.innerHTML = year22;
