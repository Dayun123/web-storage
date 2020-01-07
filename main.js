const bgColorInput = document.querySelector('#bg-color');
const fontInput = document.querySelector('#font');
const imgInput = document.querySelector('#img');

const img = document.querySelector('img');
const p = document.querySelector('p');

const htmlElement = document.querySelector('html');

htmlElement.setAttribute('style', `background-color: #${bgColorInput.value};`);
img.src = imgInput.value;
p.setAttribute('style', `font-family: ${fontInput.value};`);

document.addEventListener('change', function(e) {
  console.log(e.target);
});

