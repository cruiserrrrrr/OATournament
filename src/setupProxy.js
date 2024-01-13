const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/goods',
        createProxyMiddleware({
            target: 'http://react.ohotaktiv.ru:5000',
            changeOrigin: true,
        })
    );
};