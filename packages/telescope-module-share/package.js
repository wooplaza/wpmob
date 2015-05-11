Package.describe({
  version: '0.1.0',
  name: "telescope-module-share",
  summary: "Telescope share module package"
});

Package.onUse(function (api) {

  api.use([
    'jquery',
    'underscore',
    'templating',
    'fourseven:scss'
  ], 'client');

  api.use([
    'telescope-lib', 
    'telescope-base', 
  ]);

  api.add_files([
    'lib/share.js'
  ], ['client', 'server']);

  api.add_files([
    'lib/client/post_share.html', 
    'lib/client/post_share.js', 
    'lib/client/post_share.scss'
  ], ['client']);
  
  // api.export();
});

Cordova.depends({
    'org.apache.cordova.console': '0.2.13',
    'org.apache.cordova.device': '0.3.0',
    'nl.x-services.plugins.socialsharing': '4.3.18'
});
