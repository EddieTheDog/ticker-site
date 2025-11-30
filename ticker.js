async function loadTicker() {
  const response = await fetch('ticker.json');
  const data = await response.json();
  const tickerDiv = document.querySelector('.ticker');
  tickerDiv.textContent = data.messages.join(' • ');
  // Optional: repeat for infinite scrolling
}

function scrollTicker() {
  const tickerDiv = document.querySelector('.ticker');
  let pos = tickerDiv.offsetWidth;
  function animate() {
    pos--;
    tickerDiv.style.transform = `translateX(${pos}px)`;
    if (pos < -tickerDiv.scrollWidth) pos = tickerDiv.offsetWidth;
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('load', () => {
  loadTicker();
  scrollTicker();
});
