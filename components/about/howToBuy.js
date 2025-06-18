export function renderHowToBuyContent() {
  return `
    <div id="howtobuyContent">
      <div class="terminal-prompt">[user@speedshell /howtobuy]$</div>
      <h2 class="card-title">How to Buy $SPEED</h2>
      <div class="card-content">
        <ul>
          <li><strong>1. Set Up a Wallet:</strong> Download and install MetaMask or Trust Wallet on your device.</li>
          <li><strong>2. Fund Your Wallet:</strong> Purchase BNB (Binance Coin) from a trusted exchange (such as Binance or Coinbase), then transfer it to your wallet address.</li>
          <li><strong>3. Connect to a DEX:</strong> Visit <b>four.meme</b> or <b>PancakeSwap</b> and connect your wallet (make sure you are on the correct network).</li>
          <li><strong>4. Swap BNB for $SPEED:</strong> Paste the official $SHELL contract address into the swap field. Adjust slippage tolerance if required (typically 5–8%).</li>
          <li><strong>5. Confirm Your Purchase:</strong> Approve the transaction in your wallet and wait for confirmation. Welcome to the Speed Shell community!</li>
        </ul>
        <p style="margin-top:16px; color:rgba(57,255,20,0.75); font-size:0.97em;">
          *Always double-check the contract address from official sources to avoid scams.*
        </p>
      </div>
      <div class="terminal-status-bar">STATUS: GUIDE_LOADED</div>
    </div>
  `;
}
