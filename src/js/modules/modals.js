const modals = () => {
  let isBtnPressed = false;

    const calcScroll = () => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50ps';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }

                if (!display) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${calcScroll()}px`;
                }
            });
        }, time);
    };

    const openByScroll = selector => {
      window.addEventListener('scroll', () =>{
        const offsetY = window.pageYOffset;
        const clientHeightView = document.documentElement.clientHeight;
        const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

        if (!isBtnPressed && offsetY + clientHeightView >= pageHeight) {
          document.querySelector(selector).click();
        }
      });
    };

    const bindModal = (
        triggerSelector,
        modalSelector,
        closeSelector,
        destroy = false
    ) => {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        triggers.forEach(item => {
            item.addEventListener('click', e => {
              isBtnPressed = true;

              if (e.target) e.preventDefault();
              if (destroy) item.remove();

              windows.forEach(item => {
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn');
              });
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
              document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => item.style.display = 'none');
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', e => {
            if (e.target === modal) {
                windows.forEach(item => item.style.display = 'none');
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    };

    bindModal(
        '.button-design',
        '.popup-design',
        '.popup-design .popup-close'
    );
    bindModal(
        '.button-consultation',
        '.popup-consultation',
        '.popup-consultation .popup-close'
    );
    bindModal(
        '.fixed-gift',
        '.popup-gift',
        '.popup-gift .popup-close',
        true
    );

    openByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);
};

export default modals;