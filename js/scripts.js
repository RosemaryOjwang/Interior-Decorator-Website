//Business logic
function randomColor() {
  const h = ((Math.random())*100).toFixed();
  const s = 50;
  const l = 50;
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}
window.onload = function () {
  const newColor = randomColor();
  let body = window.document.querySelector("body");
  body.onmouseover = function() {
  body.style.backgroundColor = newColor;
  };
    
};