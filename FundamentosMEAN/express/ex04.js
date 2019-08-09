const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Remove clientes'))

server.listen(3000, () => console.log('Executando na porta 3000!'));