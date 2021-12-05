const calcPrice = (size, material, options, promo, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promo),
          resultBlock = document.querySelector(result);

    const calcFunc = () => {
        const sizeValue = Number(sizeBlock.value);
        const materialValue = Number(materialBlock.value);
        const optionsValue = Number(optionsBlock.value);

        const sum = Math.round(sizeValue * materialValue + optionsValue);

        if (sizeBlock.value === '' && materialBlock.value === '') {
            resultBlock.textContent = 'Выберите размер и материал картины'
        } else if (sizeBlock.value === '') {
            resultBlock.textContent = 'Выберите размер картины'
        } else if (materialBlock.value === '') {
            resultBlock.textContent = 'Выберите материал картины'
        } else if (promoBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
          resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);
};

export default calcPrice;