import { backend } from 'declarations/backend';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

async function loadConversationHistory() {
    const history = await backend.getConversationHistory();
    history.forEach(message => {
        displayMessage(message.sender, message.content);
    });
}

function displayMessage(sender, content) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender.toLowerCase()}`;
    messageElement.innerHTML = `<strong>${sender}:</strong> ${content}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage('You', message);
        userInput.value = '';

        await backend.addMessage('You', message);
        const claudeResponse = await backend.getClaudeResponse(message);
        displayMessage('Claude', claudeResponse);
    }
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Load conversation history when the page loads
loadConversationHistory();
