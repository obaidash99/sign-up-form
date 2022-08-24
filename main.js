let firstNameInput = document.querySelector('[name="first-name"]');
let lastNameInput = document.querySelector('[name="last-name"]');
let emailInput = document.querySelector('[name="email"]');
let passwordInput = document.querySelector('[name="password"]');
let msgFirstName = document.querySelector('.msg-first');
let msgLastName = document.querySelector('.msg-last');
let msgEmail = document.querySelector('.msg-email');
let msgPassword = document.querySelector('.msg-password');

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

window.onload = function () {
	document.forms[0].reset();
};

document.forms[0].onsubmit = (e) => {
	firstNameValid = false;
	lastNameValid = false;
	emailValid = false;
	passowrdValid = false;

	if (firstNameInput.value !== '') {
		firstNameValid = true;
		firstNameInput.classList.remove('error');
		firstNameInput.classList.add('success');
		msgFirstName.style.display = 'none';
	} else {
		firstNameInput.classList.remove('success');
		firstNameInput.classList.add('error');
		msgFirstName.style.display = 'block';
	}

	if (lastNameInput.value !== '') {
		lastNameValid = true;
		lastNameInput.classList.remove('error');
		lastNameInput.classList.add('success');
		msgLastName.style.display = 'none';
	} else {
		lastNameInput.classList.remove('success');
		lastNameInput.classList.add('error');
		msgLastName.style.display = 'block';
	}

	if (emailInput.value !== '' && emailInput.value.match(mailformat)) {
		emailValid = true;
		emailInput.classList.remove('error');
		emailInput.classList.add('success');
		msgEmail.style.display = 'none';
	} else {
		emailInput.classList.remove('success');
		emailInput.classList.add('error');
		msgEmail.style.display = 'block';
	}

	if (passwordInput.value !== '') {
		passowrdValid = true;
		passwordInput.classList.remove('error');
		passwordInput.classList.add('success');
		msgPassword.style.display = 'none';
	} else {
		passwordInput.classList.remove('success');
		passwordInput.classList.add('error');
		msgPassword.style.display = 'block';
	}

	if (
		firstNameValid === false ||
		lastNameValid === false ||
		emailValid === false ||
		passowrdValid === false
	) {
		e.preventDefault();
	}
};
