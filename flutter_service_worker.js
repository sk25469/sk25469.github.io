'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e40cd25ef2d2dce2ed15a67e33b4770d",
"assets/assets/animation/hovering-animation.riv": "292147b2b4730e8e0c977abb05277b28",
"assets/assets/animation/upload-animation.riv": "1e280a637bcc7a01af54f0d8597f00c3",
"assets/assets/font/Festive-Regular.ttf": "607587a4eaa3619143663d4306c97cd4",
"assets/assets/font/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/font/MeaCulpa-Regular.ttf": "a9440d701061918338937038a7150f19",
"assets/assets/font/Memorial-Lane.ttf": "a1727ecbab641940c74aa48cbcedbdba",
"assets/assets/font/Monoton-Regular.ttf": "d20753b0996b7092460eef623995f880",
"assets/assets/font/Redressed-Regular.ttf": "b78f7d6f2895718c0c4ea048e0c05585",
"assets/assets/font/ZenKakuGothicAntique-Bold.ttf": "a5d9f2854ea2e93bb9e03cb7f0740448",
"assets/assets/font/ZenKakuGothicAntique-Light.ttf": "866719fd766e96bdfa887747b13f0e24",
"assets/assets/font/ZenKakuGothicAntique-Medium.ttf": "7e848bc15d7dbaf38ecc1c9c07024028",
"assets/assets/font/ZenKakuGothicAntique-Regular.ttf": "6ddf564d1f9f2d3c3cd5b6df8cb55c45",
"assets/assets/icons/android.png": "559a0a9a1aa7eef40fe601175855a7d5",
"assets/assets/icons/contact.png": "0f76f1b5bad5996784da58942a05e3b1",
"assets/assets/icons/cpp.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/icons/dart.png": "67afaf26546ac978c500b22ba7707dda",
"assets/assets/icons/database.png": "b86c7d6b783c5c0c9734d0f4318a22f9",
"assets/assets/icons/docker.png": "ae93670ce4623300949eb7eb901a6d3b",
"assets/assets/icons/email.png": "a3b8fe3524ac2fea160fa5bc3d74910f",
"assets/assets/icons/facebook.png": "01d7fe99cc6c29a1e0858f11cd0290fe",
"assets/assets/icons/fb.png": "bbfcaa617a5526b4d569989b3fda5f9b",
"assets/assets/icons/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/icons/flutter.png": "29cc077b8f33a112a45d90c8faa68cc3",
"assets/assets/icons/github.png": "2698f0e8dde3375a4dd3f5c20c4ab8b1",
"assets/assets/icons/golang.png": "1feab086fe1da5134f3a87f51c263683",
"assets/assets/icons/google.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/icons/idea.png": "cfbd667ab5ca4982fdf34d6eaa7704e6",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/java.png": "5591fd9e7826533401b44dd236a49de1",
"assets/assets/icons/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/icons/linux.png": "fe83f1c5f88631350159acd03b10ab10",
"assets/assets/icons/medal.png": "39d8f8fed238313272faefe468e79f72",
"assets/assets/icons/mongodb.png": "2466b513082d9094382bd88e598ab2af",
"assets/assets/icons/project.png": "217d1aa9f4ec01784e631fec1c3dbad9",
"assets/assets/icons/python.png": "4e2fa813521506fefd0113bbd326f02e",
"assets/assets/icons/skills.png": "0c93e83b7d20259d609a0214cdf23fb6",
"assets/assets/icons/springBoot.png": "a707005c50050f1571b30372d8088b6f",
"assets/assets/icons/twitter.png": "49c5dfc52d5de40ebe944a39ac98f327",
"assets/assets/images/abstract_bg.jpg": "962bcad862e2c8495f1fffa85df6b15d",
"assets/assets/images/codejam.png": "ae2c056dac3c09efe8fb883070b2eb1b",
"assets/assets/images/coding_school.png": "8c2eb6ef964c0697fffcbee074001f8d",
"assets/assets/images/coursera.png": "c8d2fe52450690cc2e064036a97fbab7",
"assets/assets/images/hello_world.png": "3f591950c50b9714e2ac0219b3f83216",
"assets/assets/images/kickstart.png": "d9b0841b9114b70bc693f6e67ee0c4cd",
"assets/assets/images/sahil_dark.png": "19bf8ac948dcb45f2ac516c27ebf0649",
"assets/assets/images/sahil_light.png": "86d6cfd2954b274273c651ba228cdfc9",
"assets/assets/images/sahil_selfie.jpg": "34aed027c993104dd1226dc4df133a9f",
"assets/assets/images/signature.png": "e0aaaae92f73b4fa39a10a1b8c529013",
"assets/FontManifest.json": "9ec5317423c3d6735eb7d15b828e0663",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5f5c3acdf4aecb51b0452be3315d47c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "572112ff9fdb68298e432d2e249fe7ea",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d7c66fd7b6063c3cb743be405722b3a7",
"/": "d7c66fd7b6063c3cb743be405722b3a7",
"main.dart.js": "1b3d98728c821da555073f3c31e3cec8",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
