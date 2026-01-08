
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/header"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/menu/donner-pizza",
    "route": "/menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XEKRKQYK.js"
    ],
    "route": "/menu/donner-pizza"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H4GRSFC5.js"
    ],
    "route": "/menu/burger-fries"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3ZE65BE4.js"
    ],
    "route": "/menu/notts-piri-piri"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 740, hash: '5c04fced37af44245b42657b76c927ac2426399e4e0c9f153d8ad02111b68e90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1103, hash: '245ada12a247c540f31320e4be18350121cb0575a88c6dbb4306e718f889f95c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13902, hash: '411f671884c1b5916ccd4425718b1e6519408a6854a8a3af13262afda7049960', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10253, hash: 'ce67b5025dde1d6af716624d85c44bc7a7839838d10fccf3452197e3e7ff8f6e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 7976, hash: '6f47f6d426da7caa4fd50744446fbcdd39ed29439cfaae002633c6a9687284cd', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'menu/burger-fries/index.html': {size: 12824, hash: '289a3263f0916d1a595bb3b3d8efc4b813f2a0c9aa9e9b62bc39a862fd09cf5f', text: () => import('./assets-chunks/menu_burger-fries_index_html.mjs').then(m => m.default)},
    'menu/notts-piri-piri/index.html': {size: 11960, hash: 'e652acd5341cf1eeee568ee0d336dfb00f833bbb1a141550ae0d21b160bac65d', text: () => import('./assets-chunks/menu_notts-piri-piri_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10018, hash: '098ad8e3d2471749bdd8374dacdb7dac760a4eb8a0fdfc6cf6240583b40e33e5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13902, hash: '411f671884c1b5916ccd4425718b1e6519408a6854a8a3af13262afda7049960', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/donner-pizza/index.html': {size: 15923, hash: 'a49ac47e46f0eb4aa73cdc9bd3356080102de0ad50be66ab2b6d5614d821fdba', text: () => import('./assets-chunks/menu_donner-pizza_index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};
