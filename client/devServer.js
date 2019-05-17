/* eslint-disable no-console */
'use strict'

module.exports = (app) => {
  // Start https server in non-production mode only
  // Allows remote debugging over local network
  // Get https credentials
  const fs = require('fs')
  const privateKey = fs.readFileSync('secrets/server.key', 'utf8')
  const certificate = fs.readFileSync('secrets/server.cert', 'utf8')
  const credentials = {
    key: privateKey,
    cert: certificate
  }

  const https = require('https')
  const httpsServer = https.createServer(credentials, app)

  // Get local IP address for remote debugging on mobile
  const os = require('os')
  const ifaces = os.networkInterfaces()
  let address
  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return
      }
      address = iface.address
    })
  })

  // Start the https server
  const httpsPort = 8081
  httpsServer.listen(httpsPort)
  console.log(`Https server listening on https://${address}:${httpsPort}`)
}
