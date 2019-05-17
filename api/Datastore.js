'use strict'

const { Datastore } = require('@google-cloud/datastore')

/**
 * Get Google Maps API credentials from Google Cloud Datastore
 *
 * @return { string } API_KEY
 *
 * @throws { string } 'custom error message'
 *
 */
module.exports.getApiKey = (apiName) => {
  return new Promise((resolve, reject) => {
    const datastore = new Datastore({
      projectId: 'just-weather-app'
    })
    const key = datastore.key([ 'env', apiName ])
    datastore.get(key, (err, entity) => {
      if (!err) {
        let API_KEY = entity.KEY
        resolve(API_KEY)
      } else {
        let errorText = `Error getting Geocoding Api url and key from datastore: ${err}`
        reject(errorText)
      }
    })
  })
}
