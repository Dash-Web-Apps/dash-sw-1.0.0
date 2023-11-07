self.addEventListener('fetch', event => {
     const url = new URL(event.request.url); 
     event.respondWith(new Response('shit from the porxy!1', { status: 200 })); }); 

