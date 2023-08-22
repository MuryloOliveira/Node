const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Olá,usuário')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})