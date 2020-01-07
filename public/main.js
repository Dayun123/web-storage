const bgColorInput = document.querySelector('#bg-color');
const fontInput = document.querySelector('#font');
const imgInput = document.querySelector('#img');

const img = document.querySelector('img');
const p = document.querySelector('p');

const htmlElement = document.querySelector('html');

const setStyles = () => {
  if (window.localStorage.length > 0) {
    img.src = window.localStorage.img || imgInput.value;
    imgInput.value = window.localStorage.img || imgInput.value
    p.style.fontFamily = window.localStorage.font || fontInput.value;
    fontInput.value = window.localStorage.font || fontInput.value;
    const bgColor = window.localStorage.bgColor || bgColorInput.value;
    bgColorInput.value = window.localStorage.bgColor || bgColorInput.value;
    htmlElement.setAttribute('style', `background-color: #${bgColor};`);
  } else {
    htmlElement.setAttribute('style', `background-color: #${bgColorInput.value};`);
    img.src = imgInput.value;
    p.style.fontFamily = fontInput.value;
  }
}

setStyles();

bgColorInput.addEventListener('change', function() {
  htmlElement.setAttribute('style', `background-color: #${this.value};`);
  window.localStorage.bgColor = this.value;
});

fontInput.addEventListener('change', function() {
  p.style.fontFamily = this.value;
  window.localStorage.font = this.value
});

imgInput.addEventListener('change', function() {
  img.src = this.value;
  window.localStorage.img = this.value;
});

