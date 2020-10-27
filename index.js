if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => { })
      .catch(err => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}
