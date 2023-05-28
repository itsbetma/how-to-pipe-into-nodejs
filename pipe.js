const CryptoJS = require('crypto-js')

function encrypt(data) {
  const secretKey = CryptoJS.enc.Utf8.parse('YOUR_SECRET_KEY') // Put it on the .env file

  const ciphertext = CryptoJS.AES.encrypt(data, secretKey, { iv: secretKey }).toString() // Encryption

  return ciphertext
}

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (data) {
  console.log('data from pipe: ', data)
  console.log('encrypted data:', encrypt(String(data)))
})
