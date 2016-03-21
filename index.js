#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var file = path.join(__dirname, 'CONTRIBUTING.md')

fs.createReadStream(file).pipe(process.stdout)
