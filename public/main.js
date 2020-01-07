const bgColorInput = document.querySelector('#bg-color');
const fontInput = document.querySelector('#font');
const imgInput = document.querySelector('#img');

const img = document.querySelector('img');
const p = document.querySelector('p');

const htmlElement = document.querySelector('html');

const setStyles = () => {
  if (window.localStorage.length > 0) {
    console.log('Stuff in local storage');
  } else {
    console.log('nah');
  }
}

setStyles();

htmlElement.setAttribute('style', `background-color: #${bgColorInput.value};`);
img.src = imgInput.value;
p.setAttribute('style', `font-family: ${fontInput.value};`);

bgColorInput.addEventListener('change', function() {
  htmlElement.setAttribute('style', `background-color: #${this.value};`);
});

fontInput.addEventListener('change', function() {
  p.setAttribute('style', `font-family: ${this.value};`);
});

imgInput.addEventListener('change', function() {
  img.src = this.value;
});

