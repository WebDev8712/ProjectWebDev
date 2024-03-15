function prev(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });

    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    slides[currentIndex].classList.add('active');
}

function next(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });

    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;

    slides[currentIndex].classList.add('active');
}

// добавь с этой строки шо хотите(меняй только названия картинок брат)

function prev1(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide1');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active1')) {
            currentIndex = index;
            slide.classList.remove('active1');
        }
    });

    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    slides[currentIndex].classList.add('active1');
}

function next1(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide1'); // Исправить здесь
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active1')) {
            currentIndex = index;
            slide.classList.remove('active1');
        }
    });

    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;

    slides[currentIndex].classList.add('active1');
}

let Container = document.querySelector('.container');
let newSlider = document.createElement('div');
newSlider.className = 'slider1';
newSlider.innerHTML = `
  
  <div class="slides1">
    <div class="slide1 active1">
      <img src="ofpc.jpeg">
    </div>
    <div class="slide1">
      <img src="pc.jpg">
    </div>
    <div class="slide1">
      <img src="printer.jpg">
    </div>
  </div>
  <button class="prev" onclick="prev1(this)">&#10094;</button>
  <button class="next" onclick="next1(this)">&#10095;</button>
`;
Container.appendChild(newSlider);

newSlider.querySelector('.prev').addEventListener('click', function() {
    prev1(this);
});

newSlider.querySelector('.next').addEventListener('click', function() {
    next1(this);
});
// типо крутой в хтмл выводит то что в скобочках  на Ё