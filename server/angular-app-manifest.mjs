
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
      "chunk-MMEWFMVN.js"
    ],
    "route": "/Notts-Grillix/menu/notts-piri-piri"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 754, hash: '450d184eff0fb8d06e0197edf915fdeac8c3acbd9c03f454b336b20e1c6f6d1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1117, hash: '3ed1278ddaceb0dcd8bdad070cf9e55ab0819f92865a6fb63f6294690c25e025', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13497, hash: '57b2ee60d412ec3cac0be23a435697581c6f247f6e88fd4ccc76790ce951c28c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13497, hash: '57b2ee60d412ec3cac0be23a435697581c6f247f6e88fd4ccc76790ce951c28c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10306, hash: '72edb8a452b9f4b809263950608f97410f385257492488ee8cfff80742cd097d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 8097, hash: 'a33de262f396e47efe0af94f42403fcf6efe9620fb9c25874bf34a5f2d2f2fa7', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'menu/notts-piri-piri/index.html': {size: 12002, hash: 'ef8f6d2e42e2c5a620d17954e9d2ac2d14723329d09529110606a6a196715026', text: () => import('./assets-chunks/menu_notts-piri-piri_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10006, hash: 'b2db40921c8d4cd1e823fc43099f126e385eba2279fa2e0075288c25331aa064', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'menu/burger-fries/index.html': {size: 12877, hash: '2ceeff1edaf0c75f1326072f7baa61afa079a9bd984ae691b0c0bda54c70d7f4', text: () => import('./assets-chunks/menu_burger-fries_index_html.mjs').then(m => m.default)},
    'menu/donner-pizza/index.html': {size: 15976, hash: '3e1787dc936826a2e56dc453dcf00832ddfa723ed5b1143619acc15ae597c40d', text: () => import('./assets-chunks/menu_donner-pizza_index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};
