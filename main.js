const passwordFormat = /^(?=(.*[A-Z]){5})(?=(.*[!@#$%^&*()_+={}\[\]|;:"',<.>\/?]){6})(?=(.*-){2}).{13}$/;
const usernameFormat = /^\S+$/;
const emailFormat = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const form = document.getElementById('validatorForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
		event.preventDefault();

		const passwordInput = document.getElementById('password').value;
		const usernameInput = document.getElementById('username').value;
		const emailInput = document.getElementById('email').value;

		const errors = [];

		if (!passwordFormat.test(passwordInput)) errors.push('Invalid password');
		if (!usernameFormat.test(usernameInput)) errors.push('Invalid username');
		if (!emailFormat.test(emailInput)) errors.push('Only gmails are allowed');

		if (errors.length > 0) {
				message.textContent = `Errors: ${errors.join(', ')}`;
				message.className = 'error';
		} else {
				message.textContent = 'User has been registered successfully!';
				message.className = 'success';
				form.restart();
		}
});
