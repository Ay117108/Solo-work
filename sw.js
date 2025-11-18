self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("solo-app").then((cache) => cache.addAll(["/", "/index.html", "/src/main.jsx"]))
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});