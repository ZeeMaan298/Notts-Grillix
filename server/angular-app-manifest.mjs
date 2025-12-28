
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
      "chunk-MMEWFMVN.js"
    ],
    "route": "/menu/notts-piri-piri"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 740, hash: '3cfe90cbff6ad7549af22c91cc3c099fa5f5a75e7760d27ed450d2564f293120', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1103, hash: 'e8e6ee8674bea5266ae3e98dd3881fec6cd3731db5cb64b61d8655df38ad0002', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13385, hash: '3c8c0301f44b1a24da6878195973d489151bda82bfa2302a69737001914fb619', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13385, hash: '3c8c0301f44b1a24da6878195973d489151bda82bfa2302a69737001914fb619', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9894, hash: '860dde897e3d674be4b9f12c380e4689cd17109bd358487bf91a9f229ae7e443', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10194, hash: '9dc087f2228e79fa67d12c57dac44802d4b9b977eaa047372950e50fd5a26781', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'menu/notts-piri-piri/index.html': {size: 11890, hash: '74d57580ae4176edee52b1ba108d6cbbdcdc62125b5eb75b6efe4f69db39b6f9', text: () => import('./assets-chunks/menu_notts-piri-piri_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 7887, hash: 'a87a0c59de10dedaf19071db9c5bda148114237946e5cbb009b6463efd9b0bd5', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'menu/donner-pizza/index.html': {size: 15864, hash: '3463c3ca05c9b2ab0c3150328932cc9281214fe460336c8bf8c2caf37efabc5f', text: () => import('./assets-chunks/menu_donner-pizza_index_html.mjs').then(m => m.default)},
    'menu/burger-fries/index.html': {size: 12765, hash: 'e1f8697769fb665877d7cb18fc3db9cbf656618e893b2b98648fa792f58204cb', text: () => import('./assets-chunks/menu_burger-fries_index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};
