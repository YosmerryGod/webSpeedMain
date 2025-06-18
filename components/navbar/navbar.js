export function renderNavbar() {
    return `
        <nav class="navbar show">
            <div class="navbar-links">
                <a href="https://x.com/speed_bsc" target="_blank" rel="noopener" title="Twitter / X" class="social-x" style="display:flex;align-items:center;gap:0.5em;">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 5px #39ff14cc);">
                    <rect x="0" y="0" width="48" height="48" rx="12" fill="#101816"/>
                    <path d="M15 13.5h4.5l5.6 7.7 5.7-7.7H35L27 23l8 11.5h-4.5l-6.1-8.2-6.1 8.2H13L21 23l-8-9.5z"
                      fill="none" stroke="#39ff14" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span style="font-family:inherit;color:var(--neon-green);">X</span>
                </a>
                <a href="https://instagram.com/speedBSC" target="_blank" rel="noopener" title="Instagram" class="social-ig" style="display:flex;align-items:center;gap:0.5em;">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 5px #39ff14cc);">
                    <rect x="0" y="0" width="48" height="48" rx="12" fill="#101816"/>
                    <rect x="13" y="13" width="22" height="22" rx="7" stroke="#39ff14" stroke-width="2.3" fill="none"/>
                    <circle cx="24" cy="24" r="6.3" stroke="#39ff14" stroke-width="2.1" fill="none"/>
                    <circle cx="31.8" cy="16.2" r="1.7" fill="#39ff14"/>
                  </svg>
                  <span style="font-family:inherit;color:var(--neon-green);">IG</span>
                </a>
                <a href="https://tiktok.com/@SpeedBSC" target="_blank" rel="noopener" title="TikTok" class="social-tt" style="display:flex;align-items:center;gap:0.5em;">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 5px #39ff14cc);">
                    <rect x="0" y="0" width="48" height="48" rx="12" fill="#101816"/>
                    <path d="M31 17.3V25c0 4-3.1 6.7-7 6.7s-7-2.7-7-6.7c0-3.1 2.4-5.5 5.7-6.2" stroke="#39ff14" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                    <circle cx="33.2" cy="15" r="2" fill="#39ff14"/>
                  </svg>
                  <span style="font-family:inherit;color:var(--neon-green);">TT</span>
                </a>
                <a href="https://youtube.com/@Speed_BSC" target="_blank" rel="noopener" title="YouTube" class="social-yt" style="display:flex;align-items:center;gap:0.5em;">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 5px #39ff14cc);">
                    <rect x="0" y="0" width="48" height="48" rx="12" fill="#101816"/>
                    <rect x="11" y="16" width="26" height="16" rx="5" stroke="#39ff14" stroke-width="2.3" fill="none"/>
                    <polygon points="22,20 31,24 22,28" fill="#39ff14" stroke="#39ff14" stroke-width="1.5"/>
                  </svg>
                  <span style="font-family:inherit;color:var(--neon-green);">YT</span>
                </a>
            </div>
        </nav>
    `;
}
