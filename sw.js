// V1.3: avoid stale HTML in iPhone home-screen PWA.
const VERSION='my-finance-v13-20261020';
self.addEventListener('install',event=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{if(event.request.mode==='navigate'){event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>new Response('网络不可用，请联网后重试。',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})))}});
