
export default {
  basePath: 'https://nottsgrillixkebabs.co.uk',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
