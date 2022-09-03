const scaleTraning = document.querySelectorAll('.scale__traning');
const scaleText = document.querySelectorAll('.scale__text');
const btnPrev = document.querySelectorAll('.btn__prev');
const btnNext = document.querySelectorAll('.btn__next');
const scale = document.querySelector('.scale');

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



