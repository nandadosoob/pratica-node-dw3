const usuarioDAO = require("../model/usuario.dao");
const usuarioRN = require("../model/usuario.rn");

exports.listarUsuarios = async function(){
    return usuarioDAO.listarUsuarios();
}

exports.excluirUsuario = async function(usuario) {
    return await usuarioDAO.excluirUsuario(usuario.username);
}

exports.usuarioExiste = async function (novo_usuario) {
    return await usuarioDAO.verificaExistenciaUser(novo_usuario.username);
    return 3
    
}

exports.criarUsuario = async function(novo_usuario){
    const erro = []
    if(!usuarioRN.validarUsername(novo_usuario.username)){
        erro.push("username deve ter entre 5 e 10 caracteres!");
    }
    
    if(!usuarioRN.validarKeyTamanho(novo_usuario.senha)){
        erro.push("Senha deve ter no mínimo 8 caracteres.");
    }
    
    if(!usuarioRN.validarKeyMaiuscula(novo_usuario.senha)){
        erro.push("Senha deve conter pelo menos uma letra maiúscula.");
    }
    
    if(!usuarioRN.validarKeyNumero(novo_usuario.senha)){
        erro.push("Senha deve conter pelo menos um número.");
    }
    
    if(!usuarioRN.validarKeyCaractereEspecial(novo_usuario.senha)){
        erro.push("Senha deve conter pelo menos um caractere especial.");
    }

    if (erro.length > 0){
        return { sucesso: false, erro };
    }
    
    await usuarioDAO.criarUsuario(novo_usuario);
    return { sucesso: true };
}
