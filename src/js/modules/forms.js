const forms = () => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');


    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearInputs = () => {
        inputs.forEach(item => item.value = '');
        upload.forEach(item => item.previousElementSibling.textContent = 'Файл не выбран');
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    upload.forEach(item => {
      item.addEventListener('input', () => {
        const fileName = item.files[0].name.split('.');
        const dots = fileName[0].length > 8 ? '...' : '.';
        item.previousElementSibling.textContent = fileName[0].substring(0, 8) + dots + fileName[1];
      });
    });

    forms.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            item.parentNode.appendChild(statusMessage);
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => item.style.display = 'none', 400);

            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            const textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            const api =
                item.closest('.popup-design') || item.classList.contains('calc-form')
                    ? path.designer
                    : path.question;

            postData(api, formData)
                .then(() => {
                    statusImg.setAttribute('src', message.ok);
                    statusImg.style.textAlign = 'center';
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 4000);
                });
        });
    });
};

export default forms;