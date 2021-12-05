const sliders = (slides, prev, next, isVerticalDir = false) => {
  let slideIndex = 1;
  let paused;
  const items = document.querySelectorAll(slides);

  const showSlides = index => {
    if (index > items.length) slideIndex = 1;
    if (index < 1) slideIndex = items.length;

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex-1].style.display = 'block';
  };

  const changeSlide = index => showSlides(slideIndex += index);

  showSlides(slideIndex);

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      changeSlide(-1);
      items[slideIndex-1].classList.remove('slideInRight');
      items[slideIndex-1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      changeSlide(1);
      items[slideIndex-1].classList.remove('slideInLeft');
      items[slideIndex-1].classList.add('slideInRight');
    });
  } catch (e) {}

  const activateAnimation = () => {
    if (isVerticalDir) {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex-1].classList.add('slideInDown');
      }, 5000);
    } else {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex-1].classList.remove('slideInLeft');
        items[slideIndex-1].classList.add('slideInRight');
      }, 3000);
    }
  };

  items[0].parentNode.addEventListener('mouseenter', () => clearInterval(paused));
  items[0].parentNode.addEventListener('mouseleave', () => activateAnimation());
};

export default sliders;