console.log('Hello World');
// Importar dependência
// const express = require('express');
// O Node liberou acesso aos ECMAScript modules, dá para importar similar ao python. É preciso adicionar em package.json ("type": "module",)
// Outra modificação é a extensão do arquivo JS que precisa ser .mjs
import express from 'express'; // dependência que auxilia na criação de rotas
const app = express();
// Criando a primeira rota ex: www.minhaapi.com/ads
app.get('/ads', (request, response) => {
    // Em request pode-se obter dados/informações da requisição
    // response é a resposta a ser retornada
    console.log('Acessou a rota /ads!'); // // Vai aparecer no terminal
    // return response.send('Acessou Ads!') // Vai aparecer no HTML da página
    // Para o SPA (Single Page Application) deve-se retornar como JSON, mostra o mesmo na página web
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
    ]);
});
// Se utilizar alguma ferramenta como o Insominia, é possível obter esses dados através da rota criada http://localhost:3333/ads
// Definindo uma porta para a aplicação localhost, para rodar no terminal (node src/server.mjs)
app.listen(3333);
// Instalações
/*
    npm install typescript -D
    
    (o -D é porque o Node não reconhece Typescript, será usado apenas para desenvolvimento) (trocar a extensão do arquivo para .ts)
    
    - para realizar o casting de Typescript para JS, adicionar nas dependências o seguinte:
    "scripts": {
        "build": "tsc"
    },

    ---------------

    É necessario criar um arquivo de configuração do typescript
    npx tsc --init

    ---------------

    Ao executar (node run build) é criado um arquivo com o mesmo nome .js que deve ser executado com (node run arquivo.js)

*/ 
