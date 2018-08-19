let cacheName = 'restaurantReviews-cache';
let cacheFiles = [
    './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  './js/serviceworker-register.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
'./img/10.jpg',
];

// Install service worker

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((x) => {
        return x.addAll(cacheFiles);
    })
    );
});

// Active sevive worker and delete old cache

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((y) => {
            return Promise.all(
                y.filter(y => y !== cacheName).map(y => caches.delete(y))
            )
        })
    )
});

// fetch data for offline view

self.addEventListener('fetch',(z) => {
    z.respondWith(
        caches.match(z.request).then((respond) => {
            return respond || fetch(z.request);
        })
    )
});