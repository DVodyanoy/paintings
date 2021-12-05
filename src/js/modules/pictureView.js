const pictureView = selector => {
  const blocks = document.querySelectorAll(selector);

  const showImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    img.classList.add('animated', 'fadeIn');

    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  };

  const hideImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    img.classList.remove('animated', 'fadeIn');

    block.querySelectorAll('p').forEach(p => {
      p.style.display = 'block';
    });
  };

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => showImg(block));
    block.addEventListener('mouseout', () => hideImg(block));
  });
};

export default pictureView;