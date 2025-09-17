document.addEventListener('DOMContentLoaded', function() {
	let pass1 = document.getElementById('1st');
	let pass2 = document.getElementById('2nd');
	let passwordCache = ['', ''];

	// Copy password to clipboard when button is clicked
	pass1.addEventListener('click', function() {
		if (pass1.textContent) {
			navigator.clipboard.writeText(pass1.textContent);
			pass1.textContent = 'Copied!';
			setTimeout(() => {
				pass1.textContent = passwordCache[0] || '';
			}, 1000);
		}
	});

	pass2.addEventListener('click', function() {
		if (pass2.textContent) {
			navigator.clipboard.writeText(pass2.textContent);
			pass2.textContent = 'Copied!';
			setTimeout(() => {
				pass2.textContent = passwordCache[1] || '';
			}, 1000);
		}
	});

	window.generatePassword = function() {
		const lengthInput = document.getElementById('passwordInput');
		let length = parseInt(lengthInput.value, 10);
		if (isNaN(length) || length < 4) length = 12;
		Pass(length);
	}

	function Pass(length = 12) {
		let password1 = '';
		let password2 = '';
		for (let i = 0; i < length; i++) {
			password1 += characters[Math.floor(Math.random() * characters.length)];
			password2 += characters[Math.floor(Math.random() * characters.length)];
		}
		console.log('Generated passwords:', password1, password2);
		DisplayPass(password1, password2);
	}

	function DisplayPass(password1, password2) {
		pass1.textContent = password1;
		pass2.textContent = password2;
		passwordCache[0] = password1;
		passwordCache[1] = password2;
	}
});
// Arrays for password generation
const alphabets = [
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const numbers = ['0','1','2','3','4','5','6','7','8','9'];

const symbols = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','{','}','[',']','|',':',';','<','>','?','/'];

const characters = [...alphabets, ...numbers, ...symbols];


let pass1 = document.getElementById('1st');
let pass2 = document.getElementById('2nd');

function Pass(length = 12) {
	let password1 = '';
	let password2 = '';
	for (let i = 0; i < length; i++) {
		password1 += characters[Math.floor(Math.random() * characters.length)];
		password2 += characters[Math.floor(Math.random() * characters.length)];
	}
	console.log('Generated passwords:', password1, password2);
	DisplayPass(password1, password2);
}

function DisplayPass(password1, password2) {
	pass1.textContent = password1;
	pass2.textContent = password2;
	passwordCache[0] = password1;
	passwordCache[1] = password2;
}