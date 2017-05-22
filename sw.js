var CACHE_NAME = 'goon';
var urlsToCache = [
  'index_usuario.html',
  'css/nativedroid2.color.orange.css',
  'css/nativedroid2.css',
  'js/angular.js',
  'js/javascript.js',
  'js/nativedroid2.js',
  'css/style.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
