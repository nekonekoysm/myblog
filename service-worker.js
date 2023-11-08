/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2534951c559ab49623bd512a80685472"
  },
  {
    "url": "assets/css/0.styles.b20101d8.css",
    "revision": "0b5b8ac2753c136d47f3c160a7483299"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/img02.d8afd810.png",
    "revision": "d8afd810241717b7e371248399205930"
  },
  {
    "url": "assets/img/img03.087270f1.png",
    "revision": "087270f19537994a6cb4252b19dfeba5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.340fdfbc.js",
    "revision": "0725a5132842b27f749b5072b0a0703f"
  },
  {
    "url": "assets/js/10.65b8382b.js",
    "revision": "33b2991d646522959b0b9b8b6ceceea8"
  },
  {
    "url": "assets/js/11.c10a6377.js",
    "revision": "8158a2a134f066e62395fed2927edcfc"
  },
  {
    "url": "assets/js/14.f6cf2b9c.js",
    "revision": "db4ed34f8276338e70261ad9dbbe4eba"
  },
  {
    "url": "assets/js/15.2be0d02c.js",
    "revision": "e0e33c4722427ed5a6889d7827fdda38"
  },
  {
    "url": "assets/js/16.ca8b6a42.js",
    "revision": "3c3ac184c858d7b1bd49b31fc39ad60d"
  },
  {
    "url": "assets/js/17.42661fc9.js",
    "revision": "598c33a0d48023a8a474436eb8be3c01"
  },
  {
    "url": "assets/js/18.3aac702f.js",
    "revision": "19ee3dfb83050efb8b4d5764b62d441f"
  },
  {
    "url": "assets/js/19.afdddb03.js",
    "revision": "177aa9f4be5fa65368d1126de41aa3bc"
  },
  {
    "url": "assets/js/2.a2a2e9b6.js",
    "revision": "5a27c071241cad15ceebfa19f32608b8"
  },
  {
    "url": "assets/js/20.b95bf2f4.js",
    "revision": "113e496f57b5127ab6bc70fb3a82c25d"
  },
  {
    "url": "assets/js/21.e7208c71.js",
    "revision": "f81d8d9efe7a78ba5ed21f9fa54e0432"
  },
  {
    "url": "assets/js/22.c4a1ed4b.js",
    "revision": "6ace7c97d650282bf9b81a845aa1a71e"
  },
  {
    "url": "assets/js/23.2eceb138.js",
    "revision": "9a606eb3051fd94c7b89ed17608bd2c2"
  },
  {
    "url": "assets/js/24.ddede5bd.js",
    "revision": "98c55af76d32c6878ea911a33fcec9bc"
  },
  {
    "url": "assets/js/25.7e3736a6.js",
    "revision": "b538fbeeca4852997f61f35f117c2bd5"
  },
  {
    "url": "assets/js/26.c5815dcf.js",
    "revision": "8a94e48c689b8986a1101eda05ec4e19"
  },
  {
    "url": "assets/js/27.1f4d516b.js",
    "revision": "978931bff495cb079511985f392c1831"
  },
  {
    "url": "assets/js/28.58804535.js",
    "revision": "af30c163afbe8286d630cb3b14555934"
  },
  {
    "url": "assets/js/29.d6d7fa64.js",
    "revision": "55716ce11450143f80d6e47654164e96"
  },
  {
    "url": "assets/js/3.445246b0.js",
    "revision": "a658561a9d4456611edda22718dbff32"
  },
  {
    "url": "assets/js/30.ef03b396.js",
    "revision": "22ed98f3bd379bf9dadffba2039bcdcc"
  },
  {
    "url": "assets/js/31.fdc3559a.js",
    "revision": "ff126739a644876c93f643f5ce07ebc0"
  },
  {
    "url": "assets/js/32.15fd5e84.js",
    "revision": "33a69cfd91edd6b979d4670bde7f0b49"
  },
  {
    "url": "assets/js/33.394c0622.js",
    "revision": "d648e9918a3dda6f1362b2dba1ae40b4"
  },
  {
    "url": "assets/js/34.cd38243d.js",
    "revision": "9f5f815d78cedc5c8d48061f4f189ea8"
  },
  {
    "url": "assets/js/35.fc43b58c.js",
    "revision": "33fa12a011e27e5ae5689e691fa0af28"
  },
  {
    "url": "assets/js/36.bad46167.js",
    "revision": "70b0c6ce95f85512578a7c25a54bd701"
  },
  {
    "url": "assets/js/37.59f7a69b.js",
    "revision": "abfb77a82eb878f8e4e042ef469e16ce"
  },
  {
    "url": "assets/js/38.7fb8499c.js",
    "revision": "a2641315233d69e151bb0e5d45ab1b72"
  },
  {
    "url": "assets/js/39.46e03b81.js",
    "revision": "4a4649bd01919efbaddf414d89ce5b8b"
  },
  {
    "url": "assets/js/4.03022643.js",
    "revision": "2683d8ea98e2aa278b3492ec085e5f3c"
  },
  {
    "url": "assets/js/40.e67e7ccf.js",
    "revision": "831f3d8e8ae16058af70be5318056479"
  },
  {
    "url": "assets/js/41.b29f8cf2.js",
    "revision": "8ff9e7ccb4b932606325a8fa6f98ab93"
  },
  {
    "url": "assets/js/42.57240300.js",
    "revision": "ffc30bb3d37af59f0bab9fc9743f8b12"
  },
  {
    "url": "assets/js/43.4641af13.js",
    "revision": "91075d2519e202a170251eb58ed46b11"
  },
  {
    "url": "assets/js/44.c0e9031d.js",
    "revision": "7b8a31b417023160a397805f711aa397"
  },
  {
    "url": "assets/js/5.1af3dba3.js",
    "revision": "e74c1c1816038b7fc46fe1755e99828d"
  },
  {
    "url": "assets/js/6.aea50fe8.js",
    "revision": "d0db236012cde939c504a0ffe7f24b3c"
  },
  {
    "url": "assets/js/7.d5d20839.js",
    "revision": "32ee9b1b5fd08014ad4ca452cb29b10c"
  },
  {
    "url": "assets/js/8.58326666.js",
    "revision": "05339f1f755db318b9988d95ef23af28"
  },
  {
    "url": "assets/js/9.d42ffdc5.js",
    "revision": "8ffb59982a6ce1e86035335c6c66810b"
  },
  {
    "url": "assets/js/app.45d23ca3.js",
    "revision": "3f7df5373458fd7a37d972ae24bb99b7"
  },
  {
    "url": "assets/js/vendors~docsearch.46465544.js",
    "revision": "9f8b5af5de9d4ea89d38f3e669ed5644"
  },
  {
    "url": "avator.jpg",
    "revision": "adc8c9c15e3433b95329f5210f55e186"
  },
  {
    "url": "bgcimg.jpeg",
    "revision": "1f993ec0f63d8a9a76a57a55f02f4d12"
  },
  {
    "url": "categories/index.html",
    "revision": "d7ca5f79ad1b2a6d1d457d997fde0258"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "e4a7cc3a3d8d6090d315edcb7ffaad08"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "273b512f123b4e9f6b4f4760ac30ed50"
  },
  {
    "url": "index.html",
    "revision": "f36d62967a187920237b55cf264ccb3e"
  },
  {
    "url": "notes/buildblog/buildblog.html",
    "revision": "129a6dd6391537268108ae9f4d6468ee"
  },
  {
    "url": "notes/home/homemd.html",
    "revision": "cb28bd3102df0b7c20528539e8439270"
  },
  {
    "url": "notes/note1.html",
    "revision": "f3709a14b4e73090ceedc080202c48ca"
  },
  {
    "url": "notes/note2.html",
    "revision": "f93c42a737cf32defb2d9ddbeda9ae76"
  },
  {
    "url": "tag/index.html",
    "revision": "a5ac8ecf1193892da3f1981c78016774"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "ab5686a32f6f4895f2261d6421ad60c4"
  },
  {
    "url": "tag/vuecli/index.html",
    "revision": "dea9f269e1430725dd597c464353ba68"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e06a8aa5558bc391d6e5c8b7d5ce3dd3"
  },
  {
    "url": "timeline/index.html",
    "revision": "b7f84f070e818c52153c72e7ffce0033"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
