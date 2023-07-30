const fs = require('node:fs')

console.log('Leyendo el primer archivo..... ')
fs.readFile('./archio.txt', 'utf-8', (err, text) => {
  // <----- ejecutas este callback
  console.log('primer texto: ', text)
  console.log('documento no encontrado', err)
})

console.log('Hacer cosas mientras lee el archivo.....')

console.log('Leyendo el segundo archivo..... ')
fs.readFile('./archivo2.txt', 'utf-8', (_err, text) => {
  console.log('segundo texto:', text)
})
