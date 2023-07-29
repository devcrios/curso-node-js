const path = require('node:path')

// barra separadora
console.log(path.sep)

// unir rutas con path.join

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('tmp/crios/password.txt')
console.log(base)

const filename = path.basename('tmp/crios/password.txt', '.txt')
console.log(filename)

const extesion = path.extname('hola.image.jpg')
console.log(extesion)
