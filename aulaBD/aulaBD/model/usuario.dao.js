const db = require("../config/database");
const md5 = require('md5');

exports.listarUsuarios = async function(){
    const {rows} = await db.query("SELECT * FROM usuario WHERE isativo = true");
    return rows;
}

exports.criarUsuario = async function(novo_usuario){
    const resposta = await db.query(
        'INSERT INTO usuario (nome, username, senha, isativo) VALUES ($1, $2, $3, $4)',
        [novo_usuario.nome, novo_usuario.username, md5(novo_usuario.senha), true]
    );
    
    return "Produto cadastrado com sucesso!";
}
