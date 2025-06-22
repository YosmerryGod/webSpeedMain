import { handleMSG1 } from '../func/handleExample.js';

const chatArea = document.getElementById('chatArea');
const form = document.getElementById('terminalForm');
const input = document.getElementById('terminalInput');
const cursor = document.querySelector('.blinking-cursor');

// Scroll otomatis ke bawah
function scrollChatToBottom() {
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Tambahkan pesan ke chat
function addMsg(text, type = 'ai') {
  const div = document.createElement('div');
  div.className = 'msg ' + type;
  div.innerHTML = text;
  chatArea.appendChild(div);
  scrollChatToBottom();
  return div;
}

// Fokus input saat klik area mana saja
window.addEventListener('click', () => input.focus());

// Cursor blinking height dinamis
function updateCursorPosition() {
  const rect = input.getBoundingClientRect();
  cursor.style.height = `${rect.height}px`;
}
input.addEventListener('input', updateCursorPosition);
window.addEventListener('resize', updateCursorPosition);
setTimeout(updateCursorPosition, 300);

// ANIMASI TYPING
async function animateTyping(text, parentDiv, speed = 14) {
  parentDiv.innerHTML = '';
  let i = 0;
  let openTags = [];
  while (i < text.length) {
    if (text[i] === '<') {
      let tag = '';
      while (i < text.length && text[i] !== '>') {
        tag += text[i];
        i++;
      }
      tag += '>';
      i++;
      parentDiv.innerHTML += tag;
      if (/^<([a-zA-Z0-9]+)>$/.test(tag)) openTags.push(RegExp.$1);
      if (/^<\/([a-zA-Z0-9]+)>$/.test(tag)) openTags.pop();
    } else {
      parentDiv.innerHTML += text[i] === '\n' ? '<br>' : text[i];
      i++;
    }
    scrollChatToBottom();
    await new Promise(r => setTimeout(r, speed));
  }
  while (openTags.length) {
    parentDiv.innerHTML += `</${openTags.pop()}>`;
  }
  // Tambahkan blinking cursor di akhir balasan
  parentDiv.innerHTML += `<span class="blinking-cursor">|</span>`;
  scrollChatToBottom();
}

// SUBMIT HANDLER
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;

  addMsg(msg, 'user');
  input.value = '';

  // Tampilkan loading/AI sedang mengetik
  const loadingDiv = addMsg(
    '<span class="ai-typing">[SPEED-BRO-AI] is typing<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span></span>', 'ai'
  );

  try {
    const aiResponse = await handleMSG1(msg);
    // Ubah **bold** jadi <b> dan bikin animasi typing
    const html = aiResponse.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    await animateTyping(html, loadingDiv, 14);
  } catch (err) {
    loadingDiv.innerText = '[SPEED-BRO-AI] Sorry, error processing your message.';
  }

  scrollChatToBottom();
});

scrollChatToBottom();
