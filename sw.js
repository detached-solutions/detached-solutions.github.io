importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js'
);

if (workbox) {
  workbox.precaching.precacheAndRoute([
    {
      "url": "index.html",
      "revision": "7c3305640bd568d74afcea58aa005380"
    },
    {
      "url": "index.js",
      "revision": "0762331c43ba9db3dd4927fa887a5fa2"
    },
    {
      "url": "manifest.json",
      "revision": "9fc87bf9b3a48bd154a370518ea30ff4"
    },
    {
      "url": "res/img/icon.ico",
      "revision": "722f3fbb407de6052a86c6bebd6fd01d"
    },
    {
      "url": "res/img/icon-128x128.png",
      "revision": "5fd85c552bf5ad651397d0d8e7e48c6e"
    },
    {
      "url": "res/img/icon-144x144.png",
      "revision": "27548f63634e64527ca08cfc9bc5d668"
    },
    {
      "url": "res/img/icon-152x152.png",
      "revision": "07a48d7e6206b4ecd5aaa071eef3a5e2"
    },
    {
      "url": "res/img/icon-16x16.ico",
      "revision": "1f774a0b20a63d7b3dbb7c07d8adb94b"
    },
    {
      "url": "res/img/icon-16x16.png",
      "revision": "3d1052d02af4e5bfaccc6c8ac6b4a867"
    },
    {
      "url": "res/img/icon-192x192.png",
      "revision": "b34766f64e936d92c3a69a0764490535"
    },
    {
      "url": "res/img/icon-32x32.ico",
      "revision": "722f3fbb407de6052a86c6bebd6fd01d"
    },
    {
      "url": "res/img/icon-32x32.png",
      "revision": "18be0aee88fedcd4f455ce061a67b1f3"
    },
    {
      "url": "res/img/icon-384x384.png",
      "revision": "550ccbfd8828617a0eb7ba20e771ede2"
    },
    {
      "url": "res/img/icon-48x48.png",
      "revision": "457b8098d9a0a95c01cd929086db1c87"
    },
    {
      "url": "res/img/icon-512x512.png",
      "revision": "a744db5ffa7adbf606670769880c81ed"
    },
    {
      "url": "res/img/icon-64x64.png",
      "revision": "eeb53dd57a35473b2c9595c408e90e1c"
    },
    {
      "url": "res/img/icon-72x72.png",
      "revision": "fdac15f415df4d1545ec95c1e4c398e4"
    },
    {
      "url": "res/img/icon-96x96.png",
      "revision": "1325b44dd22d219fbb6d0e807e19a466"
    },
    {
      "url": "res/img/icon.svg",
      "revision": "856dc188076ba8760aa23a6c4f7d744b"
    },
    {
      "url": "res/styles/default.css",
      "revision": "7346e128142f94387b1b189c9710d0f1"
    }
  ]);
} else {
  console.log(`Failed to load service worker: workbox unavailable`);
}
