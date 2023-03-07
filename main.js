const scaleTraning = document.querySelectorAll('.scale__traning');
const scaleText = document.querySelectorAll('.scale__text');
const btnPrev = document.querySelectorAll('.scale__btn--prev');
const btnNext = document.querySelectorAll('.scale__btn--next');
const scale = document.querySelector('.scale');
const workLinks = document.querySelectorAll('.works__link');
const colors = ['green', 'red', 'slateblue', 'blue', 'salmon'];

class CounterScale {
  constructor() {
    this.increment = 0;
  }

  increaseNext() {
    this.increment++;
  }

  increasePrev() {
    this.increment--;
  }
}


for (let i = 0; i < btnPrev.length; i++) {
  const counterScale = new CounterScale();
  const currentPrevBtn = btnPrev[i];
  const currentNextBtn = btnNext[i];
  const currentScaleTraning = scaleTraning[i];
  const currentScaleText = scaleText[i];
  currentScaleText.textContent = currentScaleTraning.style.width;
  const actuallyScale = currentScaleTraning.style.width;

  currentNextBtn.addEventListener('click', () => {
    if (currentScaleText.textContent.slice(0, -1) !== '100') {
      counterScale.increaseNext();
      const actuallyScaleWidth = currentScaleTraning.style.width = +actuallyScale.slice(0, -1) + counterScale.increment + '%';
      currentScaleText.textContent = actuallyScaleWidth;
    } else {
      alert('MaX Scale')
    }
  })

  currentPrevBtn.addEventListener('click', () => {
    if (currentScaleText.textContent.slice(0, -1) !== '0') {
      counterScale.increasePrev();
      const actuallyScaleWidth = currentScaleTraning.style.width = +actuallyScale.slice(0, -1) + counterScale.increment + '%';
      currentScaleText.textContent = actuallyScaleWidth;
    } else {
      alert('MiN Scale')
    }
  })
}


const COLOR_PALETTE = '0123456789ABCDEF';

function getRandomColorCars() {
  let resultColor = '#';
  for (let i = 0; i < 6; i++) {
    resultColor += COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
  }
  
  Array(...workLinks).map((value) => value.style.color = resultColor);
}

setInterval(getRandomColorCars, 5000);
