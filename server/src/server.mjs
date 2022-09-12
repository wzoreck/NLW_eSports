console.log('Hello World')

// Importar dependência
// const express = require('express');

// O Node liberou acesso aos ECMAScript modules, dá para importar similar ao python. É preciso adicionar em package.json ("type": "module",)

// Outra modificação é a extensão do arquivo JS que precisa ser .mjs
import express from 'express'
 
const app = express()

// Criando a primeira rota ex: www.minhaapi.com/ads
app.get('/ads', () => { // Esse segundo parametro é uma função
    console.log('Acessou a rota /ads!')
})

// Definindo uma porta para a aplicação localhost, para rodar no terminal (node src/server.mjs)
app.listen(3333)