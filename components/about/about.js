import { renderHowToBuyContent } from './howToBuy.js';
import { renderRoadmapContent } from './roadmap.js';
import { renderTokenomicContent } from './tokenomics.js';
import { renderChatAiContent, setupChatAiListeners } from './speedAi.js';
import { renderGalleryContent } from './gallery.js';

export function renderAboutSection() {
    return `
        <div id="aboutCard" class="terminal-card">
            <div class="terminal-prompt">[user@speedshell ~]$</div>
            <h2 class="card-title">About</h2>
            <p class="card-description">
                Speed Shell is a meme-driven crypto project inspired by retro computing. Built for the fastest meme lovers on the blockchain, with a unique, fun, and community-first vision.
            </p>
            <div class="terminal-buttons-row">
                <button class="terminal-button" data-content-id="howtobuy">./how-to-buy</button>
                <button class="terminal-button" data-content-id="roadmap">./roadmap</button>
                <button class="terminal-button" data-content-id="tokenomic">./tokenomic</button>
                <button class="terminal-button" data-content-id="chatWithAi">./chat_speedBro</button>
                <button class="terminal-button" data-content-id="gallery">./gallery</button>
            </div>
            <div class="terminal-status-bar">STATUS: ONLINE</div>
        </div>
        <div id="specificContentContainer" class="expandable-content-container">
            <div class="expandable-content-card">
                ${renderHowToBuyContent()}
                ${renderRoadmapContent()}
                ${renderTokenomicContent()}
                ${renderChatAiContent()}
                ${renderGalleryContent()}
            </div>
        </div>
    `;
}

// Listeners global (kecuali Chat AI)
export function setupAboutSectionListeners() {
    const terminalButtons = document.querySelectorAll('#aboutCard .terminal-button');
    terminalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const contentId = event.target.dataset.contentId;
            showSpecificContent(contentId);
            // Attach listener Chat AI setelah section muncul
            if(contentId === 'chatWithAi') setupChatAiListeners();
        });
    });

    // Optional: Tampilkan default (misal howtobuy)
    // showSpecificContent('howtobuy');
}

// Show/hide content section
export function showSpecificContent(contentIdToShow) {
    const container = document.getElementById('specificContentContainer');
    const allContentDivs = container.querySelectorAll('.expandable-content-card > div');
    let targetContentDiv = document.getElementById(`${contentIdToShow}Content`);

    // Hide all content divs first
    allContentDivs.forEach(div => {
        div.classList.remove('active-content');
    });

    // Show the target content div
    if (targetContentDiv) {
        targetContentDiv.classList.add('active-content');

        // Animate expand
        const innerCard = container.querySelector('.expandable-content-card');
        container.style.height = 'auto';
        container.style.opacity = '0';
        container.style.overflow = 'hidden';
        void container.offsetWidth;
        const contentHeight = innerCard.scrollHeight;
        container.style.height = `${contentHeight}px`;
        container.style.opacity = '1';
        container.classList.add('expanded');
    } else {
        container.style.height = '0';
        container.style.opacity = '0';
        container.classList.remove('expanded');
    }
}
