export function renderTokenomicContent() {
  return `
    <div id="tokenomicContent">
      <div class="terminal-prompt">[user@speedshell /tokenomic]$</div>
      <h2 class="card-title">Tokenomic Analysis</h2>
      <div class="card-content">
        <p><strong>Token Name:</strong> Speed Shell Token ($SPEED)</p>
        <p><strong>Total Supply:</strong> 1,000,000,000 $SPEED</p>
        <table>
          <thead>
            <tr>
              <th>Allocation</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Public Sale</td><td>75%</td></tr>
            <tr><td>Liquidity Pool</td><td>20%</td></tr>
            <tr><td>Marketing & Development</td><td>5%</td></tr>
            <tr><td>Team & Advisors (Locked)</td><td>0%</td></tr>
            <tr><td>Community Rewards</td><td>5%</td></tr>
          </tbody>
        </table>
        <p><strong>Transaction Tax:</strong> 0% (0% Liquidity, 0% Marketing, 0% Holders)</p>
      </div>
      <div class="terminal-status-bar">STATUS: TOKENOMIC_LOADED</div>
    </div>
  `;
}
