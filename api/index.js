/* eslint-disable no-console */
'use strict'

const express = require('express')
const app = express()

// Load environment variables from .env
require('dotenv').config()

// Routes
// app.get('/', /* Middleware func */)

const port = process.env.PORT
app.listen(port)
console.log(`Http server listening on http://localhost:${port}`)
