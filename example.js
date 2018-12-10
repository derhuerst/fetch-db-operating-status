'use strict'

const fetchOperatingStatus = require('.')

fetchOperatingStatus()
.then(console.log)
.catch(console.error)
