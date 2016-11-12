var CHACHE_VERSION = 1;
var CHACHE_NAME = 'chatly-v' + CHACHE_VERSION;

self.addEventListener('install', function(event) {
  console.log('Installing service worker');

  caches.open(CHACHE_NAME);
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  console.log('Activating service worker');

  //Drop all caches for older versions
  caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        if (cacheName.indexOf(CHACHE_NAME) === -1) {
          caches.delete(cacheName);
        }
      })
    );
  });

  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') {
    event.respondWith(fetch(event.request));
  } else {
    event.respondWith(
      caches.match(event.request).then(function(cacheResponse) {
        // This will push networkResponse to cache, even if
        // cacheResponse exists.
        var networkResponse = fetchWithCache(event.request);
        return cacheResponse || networkResponse;
      })
    );
  }
});

function fetchWithCache(request) {
  var requestForFetch = request.clone();

  return fetch(requestForFetch).then(function(response) {
    if (!response || response.status !== 200) {
      return response;
    }

    var responseForFetch = response.clone();

    caches.open(CHACHE_NAME).then(function(cache) {
      cache.put(request, response);
    });

    return responseForFetch;
  });
}
