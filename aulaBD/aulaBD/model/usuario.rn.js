
exports.validarUsername = function(username){
    if((username.length >= 5) && (username.length <= 10))
        return true;
    return false;
}

exports.validarKeyTamanho = function(senha){
    if(senha.length >= 8)
        return true;
    return false;
}
exports.validarKeyMaiuscula = function(senha){
    if(/[A-Z]/.test(senha))
        return true;
    return false;
}
exports.validarKeyNumero = function(senha){
    if(/\d/.test(senha))
        return true;
    return false;
}
exports.validarKeyCaractereEspecial = function(senha){
    if(/[^a-zA-Z0-9]/.test(senha))
        return true;
    return false;
}
