const CACHE_NAME = "version-2";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log("cache opened");
      cache.addAll([
        "/static/js/bundle.js",
        "/",
        "/home",
        "/users",
        "/index.html",
        "/offline.html",
        "/logo192.png",
        "/manifest.json",
        "sw.js",
        "/dinosty-running-pass-cactus-black-260nw-783702085.webp",
        "/favicon.ico",
        "https://jsonplaceholder.typicode.com/users",
        "https://fastly.picsum.photos/id/866/800/400.jpg?hmac=sxL_lzsk2TVLY-OUFV2tHXWPnVHSbTjVg9TrwmVLpzM",
        "/post",
      ]);
    })
  );
});

//listen for fetch event

this.addEventListener("fetch", (event) => {
  // console.log("fetch event");
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log(event.request.method);
      // offline

      if (!navigator.onLine) {
        return cache.match(event.request).then((res) => {
          if (res) {
            return res;
          }
          return caches.match(
            "dinosty-running-pass-cactus-black-260nw-783702085.webp"
          );
        });
      }
      // online
      else {
        return fetch(event.request)
          .then((res) => {
            if (event.request.method === "GET") {
              cache.put(event.request, res.clone());
            }
            return res;
          })
          .catch(() => {
            caches.match(
              "dinosty-running-pass-cactus-black-260nw-783702085.webp"
            );
          });
      }
    })
  );
});
this.addEventListener("push", (e) => {
  const data = e.data.json();
  const options = {
    body: data.body,
  };
  console.log(data);
  console.log("Push Recieved...");
  this.registration.showNotification(data.title, options);
});
// this.addEventListener(
//   "fetch",
//   (event) => {
//     console.log(event);
//     // if (navigator.onLine) {
//     event.respondWith(
//       caches.open(CACHE_NAME).then((cache) => {
//         fetch(event.request)
//           .then((res) => {
//             cache.match(event.request).then((cacheRes) => {
//               if (!cacheRes) {
//                 cache.put(event.request, res.clone());
//               }
//             });
//             return res;
//           })
//           .catch(() => cache.match(event.request));
//       })
//     );
//   }

// event.respondWith(
//   caches.match(event.request).then((res) => {
//     if (res) return res;
//     return caches.match(
//       "/dinosty-running-pass-cactus-black-260nw-783702085.webp"
//     );
//   })
// );
// caches.match(event.request).then((res) => {
//   if (res) return res;
//   return caches.match(
//     "/dinosty-running-pass-cactus-black-260nw-783702085.webp"
//   );
// })
// .catch(async () => {
// console.log("catch");
// return await caches.match(
//   "/dinosty-running-pass-cactus-black-260nw-783702085.webp"
// );
// })
// }
// );
