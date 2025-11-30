async function loadTicker() {
  const response = await fetch('ticker.json');
  const data = await response.json();
  const tickerDiv = document.querySelector('.ticker');

  // Duplicate messages for continuous scrolling
  const messageText = data.messages.join(' • ') + " • " + data.messages.join(' • ');
  tickerDiv.textContent = messageText;
}

function scrollTicker() {
  const tickerDiv = document.querySelector('.ticker');
  let pos = tickerDiv.parentElement.offsetWidth; // start at right edge
  const speed = 2; // pixels per frame (adjust as needed)

  function animate() {
    pos--;
    if (pos <= -tickerDiv.offsetWidth / 2) pos = 0; // reset for infinite loop
    tickerDiv.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('load', () => {
  loadTicker().then(scrollTicker);
});
