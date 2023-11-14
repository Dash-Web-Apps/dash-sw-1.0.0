self.addEventListener('fetch', event => {
     const url = new URL(event.request.url); 
     event.respondWith(new Response('Hooray!', { status: 200 })); }); 

