const { createProxyMiddleware } = require('http-proxy-middleware');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
module.exports = function (app) {
  app.use(
    [process.env.REACT_APP_NEWS_API_URL_PATH],
    createProxyMiddleware({
      target: process.env.REACT_APP_BASE_NEWS_URL,
      changeOrigin: true
    })
  );
};