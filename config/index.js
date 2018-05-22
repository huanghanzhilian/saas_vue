// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"',
            WS_API:'"ws://samuredwonder.s1.natapp.cc"'
            // WS_API:'"ws://samured.net"'
        },
        index: path.resolve(__dirname, '../../mw_front/mweb/index.html'),
        assetsRoot: path.resolve(__dirname, '../../mw_front/mweb/'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"',
            //WS_API:'"ws://samuredwonder.s1.natapp.cc"'
            WS_API:'"ws://192.168.50.194:8080"'
        },
        port: 8081,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径
            '/api'
        ],
        // proxyTable: {
        //   "/api": {
        //     target: "http://localhost:1234",
        //     logLevel: 'debug',
        //     changeOrigin: true
        //   }
        // },

        proxypath: 'http://cangdu.org:8001',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}