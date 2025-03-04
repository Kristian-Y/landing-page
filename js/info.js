let currentIndex = 0;
let products = localStorage.getItem('products')
let productId = localStorage.getItem('c-item')
let product = products[productId]
let infoDiv = document.getElementById("info")
let slideIndex = 1;


showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

infoDiv.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p style="color: green">${product.price}$</p>
    <button class="buy-btn">Buy Now</button>
`
