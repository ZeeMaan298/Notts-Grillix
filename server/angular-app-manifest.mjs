
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Notts-Grillix/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Notts-Grillix"
  },
  {
    "renderMode": 2,
    "route": "/Notts-Grillix/home"
  },
  {
    "renderMode": 2,
    "route": "/Notts-Grillix/header"
  },
  {
    "renderMode": 2,
    "route": "/Notts-Grillix/contact"
  },
  {
    "renderMode": 2,
    "route": "/Notts-Grillix/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Notts-Grillix/menu/donner-pizza",
    "route": "/Notts-Grillix/menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XEKRKQYK.js"
    ],
    "route": "/Notts-Grillix/menu/donner-pizza"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H4GRSFC5.js"
    ],
    "route": "/Notts-Grillix/menu/burger-fries"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3ZE65BE4.js"
    ],
    "route": "/Notts-Grillix/menu/notts-piri-piri"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 754, hash: 'b5eaaa5ec605720d1e292dab4572a353ad05a3265107a5fabcfbfbbf8821bbf4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1117, hash: '0a73a1811a9ed9ec9017b656beed35a891624f1ba97a01bb57cc9a9d710828cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14014, hash: '89b9654f4735207de2e430a8e3c6667276bf38394d26000eb8ff81fe13cc3f1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10365, hash: '1afaf94faa15c85022e1295a04337a3c8439231c32ea34267d5452213d0a8b56', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14014, hash: '89b9654f4735207de2e430a8e3c6667276bf38394d26000eb8ff81fe13cc3f1c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 8186, hash: '0029166e9c82725688f5c42b94063f6b0ac4dfc9f02b3fac6a9aa691ff7f23c3', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'menu/notts-piri-piri/index.html': {size: 12072, hash: '2541db24eb7d33bc12da32396cb0b2fc670c5123ff1daba1205435f827f2475e', text: () => import('./assets-chunks/menu_notts-piri-piri_index_html.mjs').then(m => m.default)},
    'menu/burger-fries/index.html': {size: 12936, hash: '44a043e77078fe1240bbb0b411a1dcbfdcbfb2d8ec7f4344c4e0919ec06ef720', text: () => import('./assets-chunks/menu_burger-fries_index_html.mjs').then(m => m.default)},
    'menu/donner-pizza/index.html': {size: 16035, hash: 'e6149726d0672c9ae01afe5e9f235dec40ec491469fba1d74579497ae363a1bc', text: () => import('./assets-chunks/menu_donner-pizza_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10130, hash: 'edd2c23ae5e8b3464f4d405ef1142aed796598b2d520546495f6d1dd05909bd2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};
