console.log("sw registering");
navigator.serviceWorker.register('sw.js', {scope: "./"});
navigator.serviceWorker.ready.then(console.log('Service Worker is running.'));
    