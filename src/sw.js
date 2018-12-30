const cacheName = 'eventz-cachev1';
const pathsToAdd = ['/index.html'];
self.addEventListener('install', (event) => {
    even.waitUntil(caches.open(cacheName).then((cache) => {
        return cache.addAll(pathsToAdd);
    }));
});
self.addEventListener('activate',(event) => {
    console.log('activate event fired');
});
self.addEventListener('fetch', (event)=>{
    event.respondWith(caches.match(event.request,{ ignoreSearch: true}).then((response)=>{
        return response || fetch(event.request);
    }))
});