const cacheName = self.location.pathname
const pages = [

  "/",
  "/categories/",
  "/single-board-computers/raspberry-pi/",
  "/single-board-computers/raspberry-pi/raspberry-pi-5/",
  "/single-board-computers/",
  "/tags/",
  "/book.min.b267f830fdf65302ecc1702a1178d4f25aa783409b3a25098f3404dd24f37a4d.css",
  "/en.search-data.min.bedd4919425cbd69e2ddaf83f0db36a28672ef735c9e4e9526d7fbeb720a5820.json",
  "/en.search.min.cdedfdf50b9d70d7af7715828afa18068d7ea6e1b9b2864d8254a415390e29f1.js",
  
];

self.addEventListener("install", function (event) {
  self.skipWaiting();

  caches.open(cacheName).then((cache) => {
    return cache.addAll(pages);
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  function saveToCache(response) {
    if (cacheable(response)) {
      return caches
        .open(cacheName)
        .then((cache) => cache.put(request, response.clone()))
        .then(() => response);
    } else {
      return response;
    }
  }

  /**
   * @param {Error} error
   */
  function serveFromCache(error) {
    return caches.open(cacheName).then((cache) => cache.match(request.url));
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
