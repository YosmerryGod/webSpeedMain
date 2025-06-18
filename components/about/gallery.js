export function renderGalleryContent() {
  return `
    <div id="galleryContent">
      <div class="terminal-prompt">[user@speedshell /gallery]$</div>
      <h2 class="card-title">Meme Gallery</h2>
      <div class="card-content">
        <p>Behold the memes that fuel the Speed Shell!</p>
        <div class="image-gallery">
          <img src="components/about/assetsGallery/11.webp" alt="Meme 1" loading="lazy">
          <img src="components/about/assetsGallery/12.webp" alt="Meme 2" loading="lazy">
          <img src="components/about/assetsGallery/13.webp" alt="Meme 3" loading="lazy">
          <img src="components/about/assetsGallery/14.webp" alt="Meme 4" loading="lazy">
          <img src="components/about/assetsGallery/15.webp" alt="Meme 5" loading="lazy">
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: rgba(57,255,20,0.7);">
          *More memes loading soon... please stand by.*
        </p>
      </div>
      <div class="terminal-status-bar">STATUS: GALLERY_LOADED</div>
    </div>
  `;
}
