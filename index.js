#!/usr/bin/env node

var pkg = require('./package.json')
var arg = process.argv[2]

function contribs () {
  var fs = require('fs')
  var path = require('path')
  var file = path.join(__dirname, 'CONTRIBUTING.md')

  fs.createReadStream(file).pipe(process.stdout)
}

function help () {
  console.log([
    'usage: ' + pkg.name + ' > filename.md\n',
    '-h,--help      print usage info',
    '-v,--version   print version info\n',
    pkg.name + ' v' + pkg.version,
    'report an issue: ' + pkg.bugs.url
  ].join('\n'))
  process.exit(0)
}

function version () {
  console.log(pkg.version)
  process.exit(0)
}

if (arg === '--help' || arg === '-h') help()
else if (arg === '--version' || arg === '-v') version()
else contribs()
