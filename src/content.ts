function injectMemeBox() {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/');
  const value = parts[parts.length - 1];

  const box = document.createElement('div');
  box.textContent = value;
  box.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #111;
    color: white;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 12px;
    z-index: 9999;
    font-family: sans-serif;
  `;

  document.body.appendChild(box);
}

if (window.location.href.includes('axiom.trade/meme')) {
  injectMemeBox();
}
