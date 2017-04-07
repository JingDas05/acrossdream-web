var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
    '/tg': {
      target: 'http://192.168.1.100:5555/',
      secure: false
    }
  }
})
