const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  const preventDefaults = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highLight = item => {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
    item.closest('.file_upload').style.borderRadius = '30px';
  };

  const unHighLight = item => {
    item.closest('.file_upload').style.border = 'none';

    if (item.closest('.calc-form'))
      item.closest('.file_upload').style.backgroundColor = '#fff';
    else item.closest('.file_upload').style.backgroundColor = '#ededed';

    item.closest('.file_upload').style.borderRadius = '30px';
  };

  ['dragenter', 'dragleave', 'dragover', 'drop' ].forEach(event => {
    fileInputs.forEach(input => input.addEventListener(event, preventDefaults, false));
  });

  ['dragenter', 'dragover'].forEach(event => {
    fileInputs.forEach(input => input.addEventListener(event, () => highLight(input), false));
  });

  ['dragleave', 'drop'].forEach(event => {
    fileInputs.forEach(input => input.addEventListener(event, () => unHighLight(input), false));
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      const fileName = input.files[0].name.split('.');
      const dots = fileName[0].length > 8 ? '...' : '.';
      input.previousElementSibling.textContent = fileName[0].substring(0, 8) + dots + fileName[1];
    });
  });
};

export default drop;