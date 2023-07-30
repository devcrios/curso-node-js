const dittoJSON = require('./pokemon/ditto.json')
const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 1234
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   console.log('mi primer middleware')
//   // trackear la request a la base de datos
//   // revisar si el usuario tiene cookies
//   // solo seguir x url

//   // solo llegan request que son post y que tienen el header content-type: application/json
//   console.log(req.method.toString())
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la requets y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  // con el req.body deberíamos guaradar en base de datos
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
