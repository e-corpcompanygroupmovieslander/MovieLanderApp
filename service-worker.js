// service-worker.js

const cacheVersion = 'Movie_Lander_V.7.8';
const cacheName = `Movie_Lander_Cache_${cacheVersion}`;
const cacheFiles = ['./']; // Add other paths as needed

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(cacheFiles))
      .then(() => self.skipWaiting()) // Activate service worker immediately
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          // Delete old caches except the current one
          if (name.startsWith('Movie_Lander_Cache_') && name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );

  // Claim clients to ensure that updates are applied immediately
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Serve the cached response if available
          return cachedResponse;
        }

        // If the resource is not in the cache and the network is not available, show a generic offline message
        if (!navigator.onLine) {
          return new Response('Offline content here', { headers: { 'Content-Type': 'text/plain' } });
        }

        // If the resource is not in the cache, fetch it from the network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache the fetched response for future use
            const clonedResponse = networkResponse.clone();
            caches.open(cacheName).then((cache) => {
              cache.put(event.request, clonedResponse);
            });

            return networkResponse;
          })
          .catch(() => {
            // If the request fails and there is no network, show the generic offline message
            return new Response('Offline content here', { headers: { 'Content-Type': 'text/plain' } });
          });
      })
  );
});
