const usuarioDAO = require("../model/usuario.dao");
const usuarioRN = require("../model/usuario.rn");

exports.listarUsuarios = async function(){
    return usuarioDAO.listarUsuarios();
}

exports.criarUsuario = async function(novo_usuario){
    if(usuarioRN.validarUsername(novo_usuario.username) && usuarioRN.validarKeyTamanho(novo_usuario.senha) && usuarioRN.validarKeyMaiuscula(novo_usuario.senha) && usuarioRN.validarKeyNumero(novo_usuario.senha) && usuarioRN.validarKeyCaractereEspecial(novo_usuario.senha)){
        await usuarioDAO.criarUsuario(novo_usuario);
        return true;
    }
    
    // if(usuarioRN.validarKeyTamanho(novo_usuario.senha)){
    //     await usuarioDAO.criarUsuario(novo_usuario);
    //     return true;
    // }

    // if(usuarioRN.validarKeyMaiuscula(novo_usuario.senha)){
    //     await usuarioDAO.criarUsuario(novo_usuario);
    //     return true;
    // }

    // if(usuarioRN.validarKeyNumero(novo_usuario.senha)){
    //     await usuarioDAO.criarUsuario(novo_usuario);
    //     return true;
    // }
    
    // if(usuarioRN.validarKeyCaractereEspecial(novo_usuario.senha)){
    //     await usuarioDAO.criarUsuario(novo_usuario);
    //     return true;
    // }
    return false;

}
