const loginForm = document.getElementById('login-form');
username.focus()

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const NewUsername = document.getElementById('username').value;
    username = NewUsername;
    const loginContainer = document.querySelector('.login-container');
    loginContainer.classList.add('hidden');
    const mainContainer = document.getElementById('main')
    mainContainer.classList.remove('hidden');
    messageInput.focus()
});


