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
  body.onclick = function () {
    body.scrollTo({
      top: 1000,
      left: 150,
      behavior: 'smooth'
    });
  };
};
