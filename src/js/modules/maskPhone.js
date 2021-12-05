const maskPhone = selector => {
  const setCursorPosition = (pos, el) => {
    el.focus();
    el.setSelectionRange(pos, pos);
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, sym => {
      if (/[_\d]/.test(sym) && i < val.length) return val.charAt(i++);
        else if (i >= val.length) return '';
          else return sym;
    });

    if (event.type === 'blur') {
      if (this.value.length === 2) this.value = '';
    } else setCursorPosition(this.value.length, this);
  }

  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default maskPhone;