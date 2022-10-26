//Business logic
function randomColor() {
  const h = ((Math.random()) * 100).toFixed();
  const s = 50;
  const l = 50;
  return `hsl(${h}deg, ${s}%, ${l}%)`;
}
window.onload = function () {

  let body = window.document.querySelector("body");
  body.onmouseover = function () {
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    const s = 0;
    const l = 100;
    textColor = randomColor();
    body.style.color = textColor;
  };
  let scroller = window.document.querySelector(".scroller");
  scroller.onclick = function () {
    window.scrollTo(0, 20);
  };
};
