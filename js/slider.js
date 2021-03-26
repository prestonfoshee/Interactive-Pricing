const slider = document.getElementById("range");
const pageviews = document.getElementById("value");
const dollars = document.getElementById("dollar-amount");

slider.oninput = function () {
    if (slider.value == 50) {
        pageviews.innerHTML = "100K";
        dollars.innerHTML = "$16"
    } else if (slider.value == 1) {
        pageviews.innerHTML = "10K";
        dollars.innerHTML = "$8"
    } else if (slider.value == 25) {
        pageviews.innerHTML = "50K";
        dollars.innerHTML = "$12"
    } else if (slider.value == 75) {
        pageviews.innerHTML = "500K";
        dollars.innerHTML = "$24"
    } else if (slider.value == 100) {
        pageviews.innerHTML = "1M";
        dollars.innerHTML = "$36";
    }
};

slider.addEventListener("mousemove", function () {
    const x = this.value;
    const color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%)';
    slider.style.background = color;
});
