const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

textSpan.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value;
  textSpan.style.fontSize = fontSize + 'px';
});
