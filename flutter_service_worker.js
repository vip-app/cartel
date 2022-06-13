'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "29326c1406e13b8116ae588b31fa1b82",
"assets/assets/images/android1.jpg": "b20c2ee3d29a36b10581a3a61989b114",
"assets/assets/images/android2.jpg": "d431b590e13b817c19a82034d0aedd7d",
"assets/assets/images/android3.jpg": "ffc41e459b0d8d2d73c9035eb058ac9d",
"assets/assets/images/android4.jpg": "d9e3f41efff6cd9af7eec5c781476ddf",
"assets/assets/images/android5.jpg": "a1c692a8ddeca721b504e2c57710bec7",
"assets/assets/images/avatar.png": "8c8cdb702bcffd8467f47552ab55c6b4",
"assets/assets/images/ios1.jpg": "75e250ff0e25163f078074520e2ad9fe",
"assets/assets/images/ios2.jpg": "2a8bc15270873fee3a0d5969a18f31ed",
"assets/assets/images/ios3.jpg": "2265d9086c0c7624a4fa27eabbd85473",
"assets/assets/images/ios4.jpg": "a5d49000ca06ff97b9ccecdbf4cd7653",
"assets/assets/images/Thumbs.db": "9dcad8ea455c65ba0a9241533776358c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading.gif": "ff1db61bd90b3e0c966b840c70781623",
"assets/NOTICES": "ae99d6ccea939554a9ae1db08986cb5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/Thumbs.db": "58708c72a9afe62d508a1814f82f0eff",
"deliveryCalculator.html": "a42197915b913544246a8ab5a1a75482",
"deliveryCalculator.js": "9d81cb7cc4331f4c930abeb66b64ab6d",
"favicon.png": "d3b85b2a090d5df25a95951c04410ead",
"icons/Icon-192.png": "8c8cdb702bcffd8467f47552ab55c6b4",
"icons/Icon-512.png": "6a3965ab14ade11e97aa1c06a2f24869",
"icons/Icon-maskable-192.png": "8c8cdb702bcffd8467f47552ab55c6b4",
"icons/Icon-maskable-512.png": "6a3965ab14ade11e97aa1c06a2f24869",
"icons/Thumbs.db": "d1a57a9de290469929700d60ba59207a",
"index.html": "62546b1d69d45978833385939bcfcc8a",
"/": "62546b1d69d45978833385939bcfcc8a",
"main.dart.js": "8d422443e1af02343177c532171ed780",
"manifest.json": "172ce44d809943d85fd3d965ff3ae965",
"Thumbs.db": "d1b09e1bc31f8fef9c98cd584f973a08",
"version.json": "ac073edc67fe8ec786c7adc5fa73ab6f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
