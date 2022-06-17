'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a449d584130c679c21b2af9bc2b5b26b",
".git/config": "8d47bce557e4807f3df71fba87d0e975",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84565ba9f0de307a4738a3669bd41751",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e08d0d576b5d765315e4b605cc9e846",
".git/logs/refs/heads/master": "7e08d0d576b5d765315e4b605cc9e846",
".git/logs/refs/remotes/origin/master": "27808560dda12db01df5ae7bf2443090",
".git/objects/07/bb365a62fb4dbc3a4b2878e8aed3412c8e071d": "96e28e22571bf655f8bd6deeea44dedf",
".git/objects/0c/17d57679ef915ef1e5034bd3bcd1d51cd0a9c4": "9a4b539f49f60a0e5addb80d7d2dc152",
".git/objects/0d/45a0a9d7ab3109819d11cbb733140c563ede5a": "e9206b0712e20167ac9488ab159a11a1",
".git/objects/0d/ca9fd997c06407bdb69fd9d03f3e48f2d93181": "4129d69bc9b4fa52da2c9a7c9e4bd00e",
".git/objects/11/17aef32e396ae6144b8c42d2e053cf2202e360": "f2c3d8ae20b5bd2fb8e873d43389a4b6",
".git/objects/11/593c5b46a8e9e990e20f7ed4e1340b84165bf3": "3bbc57370aaf15dc362385a467045b76",
".git/objects/12/52a16b448d0bc33428bc4a9effd31eb55d24b2": "3f648227878b3f3a08621e64b6213605",
".git/objects/23/74c533fd3e8f2b1dbb33680941516e98d226f0": "fa8308987930ae1d1461d03193f4940d",
".git/objects/31/49865b681ce848d1bfe2e8103a5ee39f25cae8": "4c2c55ccf966197df5c6a5cd159ccff8",
".git/objects/37/46716e9b45c3e9cfc3cf66bedae90165325ba0": "98ec93e597adbd4f0749640cc905475b",
".git/objects/37/bb57648b2b2b1bd504f858ee4eabbb13381720": "421f8068159139583d9dc558fb3b7e6a",
".git/objects/3c/53c9cfe1b3ebc43f167934e14972953e97de20": "9cd7f2730a8cab3d0bf2284572f73391",
".git/objects/3f/47764d9aa6718e37d56cde22b45d4c586debd6": "a06e126f2e9fd5f71ec0355fb2b0488f",
".git/objects/3f/58d51d18982515923cf93853b2c2964602ef0c": "a07b19f910e3a8f9dc17e91eabcc88e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/d3cadf881c5d43bcc196bfff9cb460e863cc60": "1be7d4d4353fef83b39565a1de12a088",
".git/objects/4b/016dbf8324c548d8ffb5c0cb80fcedb28e1d9a": "dc96d74c9606a2ca430a9ca10050d135",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/6c/a8a04bc12e3138684205cc7d7e296c9658ac8e": "72d21dd084deba3345be13d14dcc682b",
".git/objects/77/922adce0c1c34ff84130f5110cb59ab8936b51": "36bc80c4a82e18b2b6d5ed4831f3c954",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/92d8dbb0af91de5c12dfec59ec8af1b0f04e73": "47a3e0edfea59432639b2ee4fd237444",
".git/objects/80/ff49cf1b1138eb269141677dc67ad0ca036dfb": "9bcb4836cd72b338fb0b72d3f9af47a3",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/86/7b5d596a60d16250a6659be8ced7036c19e1b9": "9c99a016b1d18f143d40a8ce301aa3f0",
".git/objects/89/d8f90da8880079514d491488828b729fc0c40b": "bd8cf495c88d132adaf04afa517d3f23",
".git/objects/90/165d75d2dbc408c9fa3d7ad25d05c8fff8db65": "34771bc096650ecfe191c4ca59a00272",
".git/objects/97/f0101b2271b2ea7ebe472cdc89111160dec66c": "2d130b52551305ed55987d3bd1a04982",
".git/objects/98/dea0bf20747b03db6be001df8c4443b5e8f291": "83efb989ead04402dcbf5f76331091c6",
".git/objects/9d/2e177531a95c074e6f760a1f52c192dc6813e6": "12b2a0d46d71b62685f13e794d2cb503",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/501d8f8a23620544a7ecf978f6f8cf64c87767": "dce50883d42f8e1359bc39d0f4b50b92",
".git/objects/a9/770e3affe8ef43d30ad0baa95896a09659d716": "4b1d7df045ac0e01cf672cc5ee803715",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/082f9cd09817217fc6cd9c7e6d1bdd760fa8ef": "4cd17db88009eb1d491a5b3b9982d280",
".git/objects/bb/704ed1ba9adf0ea3398b7ff32730359a654e7a": "488224cefa86702b8d95367b085a7ebb",
".git/objects/bd/66a661de8937afb0b8fe5afaa59e2cd42d2b03": "2e19ea114951b1e804ea3b0f1b9848d4",
".git/objects/c0/b605fa6804afb5d8618d62e94e0720ad5637a0": "a76518a8cddb888ace57a1d580035b26",
".git/objects/c1/68b028d53e76d46e8b5bcdb3b22623abc55ecd": "aeb3e2d246e9785644c8086141a2d5f7",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c8/d7b268c67dbb085fed319eb2cc6426eae941cd": "02288f40d6ee09b0d93e7b21ca8319f1",
".git/objects/ce/bd614e77df8ff9b71f0ee18dfe17a1742ee820": "d7d7bb3fc33e17a24a49a4e2d2cff441",
".git/objects/d1/1ede7fc4c4f7f94f257720d07a1a25cbea3bef": "2ea9ec20aab60d579b71a845ab993d92",
".git/objects/d1/c977e96d82e931170c7ca200c799a23c807112": "726702b87b532a3e634d9731db758f31",
".git/objects/d4/3adc538644b2b48e748a552402c10954a3a97a": "8d7937adbb1e03a21ed57000bf3b8630",
".git/objects/d8/eed1204eda029eab07ca02e7bf3e865656df30": "c36f9913253c7b848ca392255e63439a",
".git/objects/dc/df79e4f5fafb4650e85d633b99f5ffecc1ee07": "91aca19fc334399708640451049c4794",
".git/objects/dd/13fe968f0bcf0ab8389d7768d0da7b844741ae": "d0b84d7b0a4c98e863d9bf695327e994",
".git/objects/dd/8429d1923cdf53c653eba848b239a8c6037d73": "4243eeca2c014cd2285fab276e583085",
".git/objects/de/c86043fda23598c13a539356261e74f275b877": "493cef68b9714776d2e36e8432ae735a",
".git/objects/df/90a0bd32a898be919c4f361417b16ff33961a4": "2e6c53093ac1d8ea00928728b629b6ad",
".git/objects/e2/29c3b852c3de2e226d786da3910b019bdf3447": "b5743c99a67c5b271e31ded722f1d1c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/37468687e47ae204f285de189a99c8320fdc54": "1cfca0bc7ba23965411a1578fc1a8438",
".git/objects/f5/c22d769d13d6a67c344d3ed73680c8669b7d3d": "53c1dc39bb950a0dffe7ef2e6e2dbcc9",
".git/objects/f7/c3846a636f6472d005ffef3deeaf63738c3a28": "d1d2651bfe8fe70f26f726d9a4d51565",
".git/objects/f9/cfe3d2a42e8c5651a9b3f7108f55ff40ab0ca9": "286d9e17a190d0b525bfacec327fab69",
".git/objects/fa/f5967dffb0869ff7a2059c3d37eac189a177a2": "f75301a17fe397e8ad12c542985dcffa",
".git/objects/ff/63b59757335181822f9268356c9c4ad390d9a1": "541f432d6fa1682b7a9c3f5e676afb08",
".git/refs/heads/master": "b7afb8249577caf6007945beec591901",
".git/refs/remotes/origin/master": "b7afb8249577caf6007945beec591901",
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
"assets/assets/images/Thumbs.db": "f17807533f769b02939d07ceb64e7195",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading.gif": "ff1db61bd90b3e0c966b840c70781623",
"assets/NOTICES": "ae99d6ccea939554a9ae1db08986cb5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/Thumbs.db": "58708c72a9afe62d508a1814f82f0eff",
"deliveryCalculator.html": "a42197915b913544246a8ab5a1a75482",
"deliveryCalculator.js": "12e843cc28f044ce564e992ef28f7894",
"favicon.png": "d3b85b2a090d5df25a95951c04410ead",
"icons/Icon-192.png": "8c8cdb702bcffd8467f47552ab55c6b4",
"icons/Icon-512.png": "6a3965ab14ade11e97aa1c06a2f24869",
"icons/Icon-maskable-192.png": "8c8cdb702bcffd8467f47552ab55c6b4",
"icons/Icon-maskable-512.png": "6a3965ab14ade11e97aa1c06a2f24869",
"icons/Thumbs.db": "d1a57a9de290469929700d60ba59207a",
"index.html": "db2dda462d5628a9cedd58e115a5ccab",
"/": "db2dda462d5628a9cedd58e115a5ccab",
"main.dart.js": "f410a12cccb56b1908aa1861469a7c7e",
"manifest.json": "9e2009d0b8192525db10406f688e7e48",
"Thumbs.db": "d1b09e1bc31f8fef9c98cd584f973a08",
"version.json": "b04098f524c90c3429c3f55e290a7ab8"
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
