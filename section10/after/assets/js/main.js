let inName = document.querySelector('#inName');
let errorName = document.querySelector('#emName');
let inEmail = document.querySelector('#inEmail');
let errorEmail = document.querySelector('#emEmail');
let inSelect = document.querySelector('#inSelect');
let errorSelect = document.querySelector('#emSelect');
let inTextarea = document.querySelector('#inTextarea');
let errorTextarea = document.querySelector('#emTextarea');
let inPrivacy = document.querySelector('#inPrivacy');
let errorPrivacy = document.querySelector('#emPrivacy');
const form = document.querySelector('#contact-form');
const submitButton = form.querySelector('#button');

submitButton.addEventListener('click', function (event) {
  if (inName.value.trim() === '') {
    inName.classList.add('invalid');
    errorName.textContent = '必須項目です。';
    scrollToElement(inName);
    event.preventDefault(); // 送信を中止
  } else {
    errorName.textContent = ''; // エラーメッセージをクリア
  }
  if (!inEmail.value.includes('@')) {
    inEmail.classList.add('invalid');
    errorEmail.textContent = 'メールアドレスの形式でご入力ください。';
    scrollToElement(inEmail);
    event.preventDefault(); // 送信を中止
  } else {
    errorEmail.textContent = ''; // エラーメッセージをクリア
  }
  if (inSelect.value === '選択してください' || inSelect.value.trim() === '') {
    inSelect.classList.add('invalid');
    errorSelect.textContent = '選択してください。';
    scrollToElement(inSelect);
    event.preventDefault(); // 送信を中止
  } else {
    errorSelect.textContent = ''; // エラーメッセージをクリア
  }
  if (inTextarea.value.trim() === '') {
    inTextarea.classList.add('invalid');
    errorTextarea.textContent = '必須項目です。';
    scrollToElement(inTextarea);
    event.preventDefault(); // 送信を中止
  } else {
    errorTextarea.textContent = ''; // エラーメッセージをクリア
  }
  if (!inPrivacy.checked) {
    inPrivacy.classList.add('invalid');
    errorPrivacy.textContent = '必須項目です。';
    scrollToElement(inPrivacy);
    event.preventDefault(); // 送信を中止
  } else {
    errorPrivacy.textContent = ''; // エラーメッセージをクリア
  }
  function scrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

inName.onblur = function () {
  if (!inName.value) {
    inName.classList.add('invalid');
    errorName.innerHTML = '必須項目です。';
  }
};
inName.onfocus = function () {
  if (this.classList.contains('invalid')) {
    errorName.innerHTML = '';
  }
};
inEmail.onblur = function () {
  if (!inEmail.value.includes('@')) {
    inEmail.classList.add('invalid');
    errorEmail.innerHTML = 'メールアドレスの形式でご入力ください。';
  }
};
inEmail.onfocus = function () {
  if (this.classList.contains('invalid')) {
    errorEmail.innerHTML = '';
  }
};
inSelect.onblur = function () {
  if (inSelect.value === '選択してください' || inSelect.value.trim() === '') {
    inSelect.classList.add('invalid');
    errorSelect.innerHTML = '選択してください。';
  }
};
inSelect.onfocus = function () {
  if (this.classList.contains('invalid')) {
    errorSelect.innerHTML = '';
  }
};
inTextarea.onblur = function () {
  if (!inTextarea.value) {
    inTextarea.classList.add('invalid');
    errorTextarea.innerHTML = '必須項目です。';
  }
};
inTextarea.onfocus = function () {
  if (this.classList.contains('invalid')) {
    errorTextarea.innerHTML = '';
  }
};
inPrivacy.onchange = function () {
  if (!inPrivacy.checked) {
    inPrivacy.classList.add('invalid');
    errorPrivacy.innerHTML = '必須項目です。';
  } else {
    inPrivacy.classList.remove('invalid');
    errorPrivacy.innerHTML = '';
  }
};
function onSubmit(token) {
  if (!inPrivacy.checked || inTextarea.value.trim() === '' || inSelect.value === '選択してください' || inSelect.value.trim() === '' || !inEmail.value.includes('@') || inName.value.trim() === '') {
  } else {
    document.getElementById('contact-form').submit();
  }
}
