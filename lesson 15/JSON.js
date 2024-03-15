let slider_1 = `
<div class="slides">
  <div class="slide active">
    <img src="ofpc.jpeg">
  </div>
  <div class="slide">
    <img src="pc.jpg">
  </div>
  <div class="slide">
    <img src="printer.jpg">
  </div>
</div>
<button class="prev" onclick="prevSlide(this)">&#10094;</button>
<button class="next" onclick="nextSlide(this)">&#10095;</button>
`;

// записывем массиывы по такому принципу


const sliderObject1 = { slider_1 };
const sliderJSON1 = JSON.stringify(sliderObject1)
localStorage.setItem('slider_1', sliderJSON1);
