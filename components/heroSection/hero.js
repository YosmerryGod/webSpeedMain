export function renderHeroSection() {
    return `
        <h1 class="hero-title">Speed Shell</h1>
        <p class="hero-slogan">Where Memes Move at Machine Speed</p>
        <div class="top-hero-buttons">
            <a href="https://t.me/speedshell" class="terminal-button" target="_blank">join_community</a>
            <a href="https://pdf.speedshell.xyz" class="terminal-button" target="_blank">document</a>

        </div>
        <div class="ca-display-box">
            <span class="ca-address" id="contractAddress">0x00000000000dead</span>
            <button class="copy-button" id="copyCAButton">Copy</button>
        </div>
    `;
}

export function setupHeroSectionListeners() {
    const copyCAButton = document.getElementById('copyCAButton');
    if (copyCAButton) {
        copyCAButton.addEventListener('click', copyCA);
    }
}

function copyCA() {
    const caAddress = document.getElementById('contractAddress').innerText;
    navigator.clipboard.writeText(caAddress).then(() => {
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}