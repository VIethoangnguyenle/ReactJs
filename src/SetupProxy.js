const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware('/cms/admin/users/login', 
        {
            target: 'https://dev-umee.ssf.vn',
            changeOrigin: true
        })
    )
}