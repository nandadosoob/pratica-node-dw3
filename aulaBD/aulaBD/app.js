const express = require('express');
const app = express();
const port = 8086;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const usuarioController = require('./controller/usuario.controller');
const usuario = require('./entidades/usuario');

//Configuração do Handlebars
//Informa ao express qual template engine será usado
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//Configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/listarUsuarios', function(req, res){
  const resultado = usuarioController.listarUsuarios();
  resultado.then(resp => {res.render('listagemUsuarios', {resp})});
});

app.get('/cadastrarUsuario', function(req, res){
  res.render('cadastroUsuario');
});

app.post('/cadastrarUsuario', function(req, res){
  const novo_usuario = new usuario(req.body.nome, req.body.username, req.body.senha);
  const resultado = usuarioController.criarUsuario(novo_usuario);
  
  resultado.then(resp => 
    {resp ? res.redirect('/listarUsuarios') : 
      res.render('cadastroUsuario', 
        {usuario: novo_usuario, mensagem: 
          "Erro: username deve ter entre 5 e 10 caracteres!"})})

});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}...`);
});