/* Service worker for Spanish Anesthesia Phrases.
   Network-first for the page (so updates apply automatically when online),
   cache fallback so the app still opens with no signal. Bump CACHE to force refresh. */
const CACHE = 'spanish-anesthesia-v1';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    // Network-first: fresh when online, cached index.html when offline.
    e.respondWith(
      fetch(req)
        .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (url.origin === location.origin) {
    // Same-origin assets: cache-first.
    e.respondWith(
      caches.match(req).then(c => c || fetch(req).then(r => {
        const copy = r.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); return r;
      }).catch(() => c))
    );
  }
});
