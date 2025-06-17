let scrollTimeout;

window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const r = Math.floor(Math.random() * 156) + 100; 
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;

    document.getElementById('navbar').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }, 500); // 0.5 second after scrolling stops
});
