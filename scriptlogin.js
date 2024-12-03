const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Para processar dados do formulário
app.use(express.static(path.join(__dirname, 'public')));

// Armazenar usuários cadastrados (em memória para este exemplo)
const users = [];

// Rota para exibir o formulário de cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

// Rota para processar o cadastro
app.post('/cadastro', (req, res) => {
    const { username, password } = req.body;

    // Validação simples
    if (!username || !password) {
        return res.status(400).send('Erro: Email e senha são obrigatórios.');
    }

    // Salvar usuário (apenas em memória)
    users.push({ username, password });
    console.log(`Usuário cadastrado: ${username}`);

    // Redirecionar para a página principal
    res.redirect('/index.html');
});

// Rota para a página principal
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicializar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
