import { handleMSG1 } from '../../func/handleExample.js';


// --- RENDER CHAT WITH AI SECTION ---
export function renderChatAiContent() {
  return `
    <div id="chatWithAiContent">
      <div class="terminal-prompt">[user@speedshell /chat_ai]$</div>
      <h2 class="card-title">Chat with SPEED-BRO</h2>
      <div class="card-content chat-container">
        <div class="chat-log" id="chatLog">
          <div class="chat-message ai">&gt; Hello! I am speedBRO-AI, your guide to Speed Shell. How can I assist you today?</div>
        </div>
        <div class="chat-input-area">
          <input type="text" id="chatInput" placeholder="&gt; Type your message...">
          <button id="sendMessageButton">./send</button>
        </div>
      </div>
      <div class="terminal-status-bar">STATUS: AI_ONLINE</div>
    </div>
  `;
}

// --- SETUP EVENT LISTENER UNTUK CHAT AI ---
export function setupChatAiListeners() {
  const sendMessageButton = document.getElementById('sendMessageButton');
  const chatInput = document.getElementById('chatInput');

  if (sendMessageButton) {
    sendMessageButton.addEventListener('click', sendAiMessage);
  }
  if (chatInput) {
    chatInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        sendAiMessage();
      }
    });
  }
}



// ... kode renderChatAiContent & setupChatAiListeners tetap

async function sendAiMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatLog = document.getElementById('chatLog');
  const message = chatInput.value.trim();

  if (message === '') return;

  // Tambahkan pesan user ke chat
  const userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('chat-message', 'user');
  userMessageDiv.innerText = `> ${message}`;
  chatLog.appendChild(userMessageDiv);

  // Tampilkan placeholder "AI is thinking..."
  const aiMessageDiv = document.createElement('div');
  aiMessageDiv.classList.add('chat-message', 'ai');
  aiMessageDiv.innerText = '> ...';
  chatLog.appendChild(aiMessageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;

  // Panggil AI untuk respons
  try {
    aiMessageDiv.innerText = '> [speedBRO is thinking...]';
    const aiResponse = await handleMSG1(message);
    aiMessageDiv.innerText = `> ${aiResponse}`;
  } catch (e) {
    aiMessageDiv.innerText = '> Sorry, failed to get response from AI.';
    console.error(e);
  }

  // Scroll ke bawah & kosongkan input
  chatLog.scrollTop = chatLog.scrollHeight;
  chatInput.value = '';
}

