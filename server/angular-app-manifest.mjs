
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://nottsgrillixkebabs.co.uk/',
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
    'index.csr.html': {size: 772, hash: 'f2b36e11cedaacacf4c94d3b6b7b6ba3b6fd614f95d4b7f379a4ba4eb353aaeb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1135, hash: '028669f4b443836f4be5dc3af881dea19814826df820ee6ed8294691d85eb247', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14158, hash: '25e6e7d6a61f2e8d19c753ae52eb246b27cef486c7a12d42ae121fe22d7cb688', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10274, hash: '5736ace410aa15fbd609a2d9b080bfa58fbfab45cc2d10fae3633d6fe9d593db', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'menu/notts-piri-piri/index.html': {size: 12216, hash: '35a28124e5dff1fe60cf041164e516fbd20197da76a3a36b24fdee2198a3fe75', text: () => import('./assets-chunks/menu_notts-piri-piri_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10509, hash: '071c3105e7b42f112221180461c9b55604c1dba5befe97e88569aa2905e7f90a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 8456, hash: 'e5d2e522863905a62cffa0d354c13711a334080baced2ed9b8e0c2bae50578da', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'menu/donner-pizza/index.html': {size: 16179, hash: '02ab0d187e7a707cca729e1baed413f1479a6be1cb3b1f43f8db8336ef798d42', text: () => import('./assets-chunks/menu_donner-pizza_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14158, hash: '25e6e7d6a61f2e8d19c753ae52eb246b27cef486c7a12d42ae121fe22d7cb688', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/burger-fries/index.html': {size: 13080, hash: 'd134e3c5aed91b1e447bdca9c85831f510db1b308bbf6d5cc91dced70606f495', text: () => import('./assets-chunks/menu_burger-fries_index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};
