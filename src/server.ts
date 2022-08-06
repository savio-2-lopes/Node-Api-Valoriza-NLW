import express from 'express'
import 'reflect-metadata'
import './database'

const app = express()
const PORT = 3000

app.get('/test', (request, response) => {
  return response.send('Olá NLW')
})

app.post('/test-post', (request, response) => {
  return response.send('Olá NLW método post')
})

app.listen(PORT, () => console.log(`server is running in ${PORT}`))
