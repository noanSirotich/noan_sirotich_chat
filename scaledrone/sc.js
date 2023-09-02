let username = '';
const channelID = 'dfPuwGVpdmaiGNMX';
const drone = new Scaledrone(channelID);
let room = drone.subscribe(selectedRoom);
const sendButton = document.getElementById('send-msg');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');



// show messages
// function displayMessage(message) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('msg-bubble');
//     if (message.data.user !== username ) {
//         messageElement.classList.add('msg-incoming');
//     };
//     messageElement.textContent = `${message.data.user}: ${message.data.msg}`;
//     messagesDiv.appendChild(messageElement);
//     messagesDiv.scrollTop = messagesDiv.scrollHeight;
// };

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('msg-bubble');
    
    const userElement = document.createElement('div');
    userElement.classList.add('msg-username'); // class for styling the username
    userElement.textContent = `~~ ${message.data.user} ~~`;
    
    const messageTextElement = document.createElement('div');
    messageTextElement.classList.add('msg-text'); // class for styling the message text
    messageTextElement.textContent = message.data.msg;
    
    messageElement.appendChild(userElement);
    messageElement.appendChild(messageTextElement);
    
    if (message.data.user !== username) {
        messageElement.classList.add('msg-incoming');
    }
    
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// delete msgess

 function deleteMsgs() {
    for (let i = messagesDiv.children.length-1; i >= 0; i--) {
        const element = messagesDiv.childNodes[i];
        element.remove();
    }
 }

// kada se uspjesno otvori soba
// room.on('open', error => {
//   if (error) {
//     return console.error(error);
//   } else {
//     console.log('opened')
//   }
  
// });

room.on('message', message => displayMessage(message));

// sending msg , reakcija na button 
console.log(sendButton);

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const messageText = messageInput.value;
    messageInput.value = '';
    messageInput.focus();
    drone.publish({
        room: selectedRoom,
        message: {
            user: username,
            msg: messageText
        }
      });
    console.log('message text', messageText);
})

