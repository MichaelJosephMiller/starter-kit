/* eslint-disable no-console */
'use strict'

const express = require('express')
const app = express()

// Load environment variables from .env
require('dotenv').config()

// Run webpack-dev-middleware and webpack-hot-middleware in non-production mode only
// Provides hot code compiling and browser reloading
const webpack = require('webpack')
const config = (process.env.NODE_ENV === 'production') ? require('./webpack.prod.js') : require('./webpack.dev.js')
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}))
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

// Load dev server setup if in dev mode
if (process.env.NODE_ENV === 'development') {
  const devDServer = require('./devServer')
  devDServer(app)
}

// Helmet helps you secure your Express apps by setting various HTTP headers.
// https://helmetjs.github.io/
const helmet = require('helmet')
app.use(helmet())

// Handle requests for static files
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

// Redirect all requests to /
app.get(/.+$/, (req, res) => { res.redirect('/') })


// Set port to GAE environment port or 8080 for development
const http = require('http')
const httpPort = process.env.PORT || 8080
const httpServer = http.createServer(app)

// Start the http server
httpServer.listen(httpPort)
console.log(`Http server listening on http://localhost:${httpPort}`)
