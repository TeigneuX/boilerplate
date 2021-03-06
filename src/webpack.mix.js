let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath("public");

mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    'node_modules/admin-lte/dist/js/adminlte.min.js',
    'node_modules/bootbox/bootbox.min.js',
    'node_modules/bootstrap-notify/bootstrap-notify.min.js',
    'resources/assets/js/boilerplate.js'
], 'public/js/boilerplate.min.js');

mix.copy('node_modules/admin-lte/plugins/', 'public/js/plugins/', false)
   .copy('node_modules/drmonty-datatables-plugins/', 'public/js/plugins/datatables/plugins/', false)
   .copy('node_modules/moment/', 'public/js/plugins/moment/', false)
   .copy('node_modules/bootstrap-fileinput/', 'public/js/plugins/bootstrap-fileinput/', false);

mix.sass('resources/assets/scss/boilerplate.scss', 'public/css/boilerplate.min.css');

//mix.less('resources/assets/less/boilerplate.less', 'public/css/boilerplate.min.css');