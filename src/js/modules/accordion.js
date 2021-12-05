const accordion = (triggers, items) => {
  const buttons = document.querySelectorAll(triggers),
        blocks = document.querySelectorAll(items);

  blocks.forEach(block => block.classList.add('animated', 'fadeInDown'));
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        buttons.forEach(btn => btn.classList.remove('active', 'active-style'));
        this.classList.add('active', 'active-style');
      } else {
        this.classList.remove('active', 'active-style');
      }
    });
  });
};

export default accordion;