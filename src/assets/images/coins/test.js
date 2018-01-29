var fs = require('fs')
var request = require('request')
var axios = require('axios')

function download(uri, filename, callback) {
  console.log(`downloading ${filename}`)
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type'])
    console.log('content-length:', res.headers['content-length'])

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)
  })
}

function getIcons() {
  download('https://chasing-coins.com/api/v1/std/logo/btc', 'btc.webp', function () {
    console.log('done')
  })
}

function getCoinSymbols() {
  axios.get('https://chasing-coins.com/api/v1/coins')
    .then(res => {
      res.data.map(symbol => {
        console.log(symbol)
      })
      return res.data
    })
    .catch(err => console.log(err))
}

getCoinSymbols()
