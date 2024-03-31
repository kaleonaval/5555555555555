const express = require('express');
const app = express();

// Middleware para analisar o corpo da solicitação
app.use(express.json());

// Rota para a página inicial
app.get('/home', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

// Rota para outra página
app.get('/outra-pagina', (req, res) => {
  res.send('Você está em outra página!');
});

// Porta para o servidor escutar
const PORT = process.env.PORT || 9002;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
