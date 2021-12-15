const express = require ('express')
const consign = require ('consign')
const app = express()

consign()
    .include('./api')
    .then('./router.js')
    .into(app)

app.listen(3333, () => {
    console.log('Servidor rodando')
})