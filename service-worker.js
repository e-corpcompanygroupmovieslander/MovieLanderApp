const CACHE_NAME = 'Movie-Lander-V.1.0.3';
const STATIC_CACHE_URLS = ['./'];
const DYNAMIC_CACHE_NAME = 'Dynamic-Cache-V.1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_CACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('Movie-Lander-V.')) {
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
      if (cachedResponse) {
        console.log('Asset served from cache:', event.request.url);
        return cachedResponse;
      }

      return fetch(event.request).then(response => {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE_NAME).then(cache => cache.put(event.request, responseClone));

        console.log('Asset fetched from server and cached:', event.request.url);

        return response;
      }).catch(() => {
        // Handle offline mode here, e.g., return a custom offline page
        console.log('Failed to fetch asset. Serving offline content.');
        // You can customize this based on your needs
        return caches.match('./offline.html');
      });
    })
  );
});

