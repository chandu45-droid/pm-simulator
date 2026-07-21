/* Rocket Landing PWA service worker — network-first HTML (deploys never go stale), cache-first assets */
const CACHE = 'pmsim-v3';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './s01.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;                      // waitlist POST etc: never intercepted
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;            // cross-origin: never intercepted
  if (req.mode === 'navigate') {
    // network-first: live deploys always win; cached shell only when offline
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('./index.html', cp)); return r; })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((r) => {
        const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); return r;
      }))
    );
  }
});
