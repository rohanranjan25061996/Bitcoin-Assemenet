const proxy = require('http-proxy-middleware');
const env = process.env;
function proxyConfig(app) {
    app.use(
      proxy(env.REACT_APP_NEWS_API_URL_PATH, {
        target: env.REACT_APP_BASE_NEWS_URL,
        changeOrigin: true,
        secure: false
        // enable websocket proxying
      })
    );
  }
  module.exports = proxyConfig;
  