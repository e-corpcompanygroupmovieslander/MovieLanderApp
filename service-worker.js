/*
const CACHE_NAME = 'Movie-Lander-V.1.0.1';
const urlsToCache = ['./'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // If the resource is found in the cache, return it
      if (cachedResponse) {
        console.log('Asset served from cache:', event.request.url);
        return cachedResponse;
      }

      // If the resource is not in the cache, fetch it from the network
      return fetch(event.request).then(response => {
        // Clone the response to use it and cache it
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));

        console.log('Asset fetched from server and cached:', event.request.url);

        return response;
      });
    })
  );
});

*/