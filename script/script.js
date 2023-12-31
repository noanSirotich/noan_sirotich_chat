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

// send button text

const sendButtonText = document.getElementById('send-msg');
const originalText = sendButtonText.textContent;

sendButtonText.addEventListener('mouseover', () => {
    sendButtonText.textContent = 'Sure?';
});

sendButtonText.addEventListener('mouseleave', () => {
    sendButtonText.textContent = originalText;
});

sendButtonText.addEventListener('mouseup', () => {
    sendButtonText.textContent = 'Sent!';
    // sendButton.clicked = true;
});

// header text to refer to user

const welcomeUser = document.querySelector('h1');
// const originalHeaderText = welcomeUser.textContent;
const usernameInput = document.getElementById('username');
const signInButton = document.getElementById('signInButton');

function usernameWelcomeText() {
    if (usernameInput.value === '') {
        welcomeUser.textContent = originalHeaderText;
        
    } else {
        welcomeUser.innerHTML = `Welcome to Wonderous ${usernameInput.value}'s Chat  `
    }
};

signInButton.addEventListener('click', () => {
    usernameWelcomeText();
});