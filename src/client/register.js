navigator.serviceWorker.register('sw.js', {scope: "./"});
navigator.serviceWorker.ready.then(console.log('Service Worker is running.'));
    