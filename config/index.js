const path = require('path');


// Set dist folder
const dist = path.resolve(__dirname, '..', 'dist');


module.exports = {
    build: {

        env: {
            // Production configuration
            NODE_ENV: '"production"',
        },

        index: path.resolve(dist, 'index.html'),

        assetsRoot: dist,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/n/',

        sourceMap: false,

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        gzip: false,
        gzipExtensions: ['js', 'css'],

        // Obfuscate sources
        obfuscation: false,
        obfuscationIgnore: ['js/vendor.*'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report,

    },

    dev: {

        // Development configuration
        env: {
            NODE_ENV: '"development"',
        },

        url: '127.0.0.1',
        port: 8000,

        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: true
    },

};
