const producePluSearchApp = "produce-plu-search-pwa";
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/scripts/app.js",
  "/images/pexels-photo-2363347-limes-dark.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(producePluSearchApp).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
      })
    );
  });