const slider = document.querySelector("#range");
const pageViews = document.querySelector(".pageViewsNumber");
const priceValueM = document.querySelector(".priceValueM");
const priceValueD = document.querySelector(".priceValueD");
const switchButton = document.querySelector("#switchButton");
///////////////
const pageViewsArr = ["10K", "50K", "100K", "500K", "1M"];
const pricesArr = ["8.00", "12.00", "16.00", "24.00", "36.00"];
function progressScript() {
  const sliderValue = slider.value;
  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${
    sliderValue * 25
  }%, hsl(224, 65%, 95%) ${sliderValue}%)`;
  pageViews.innerText = pageViewsArr[sliderValue];
  priceValueM.innerText = switchButton.checked
    ? Number(pricesArr[sliderValue]) * 0.75 + ".00"
    : pricesArr[sliderValue];
  priceValueD.innerText = switchButton.checked
    ? Number(pricesArr[sliderValue]) * 0.75 + ".00"
    : pricesArr[sliderValue];
}
progressScript();
switchButton.addEventListener("click", () => {
  priceValueM.innerText = switchButton.checked
    ? Number(pricesArr[slider.value]) * 0.75 + ".00"
    : pricesArr[slider.value];

  priceValueD.innerText = switchButton.checked
    ? Number(pricesArr[slider.value]) * 0.75 + ".00"
    : pricesArr[slider.value];
});
