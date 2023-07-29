// Uno de los modulos mas importantes de Node

const fs = require('node:fs') // A partir de Node 16, se recomienda poner node: antes del modulo

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes
)
