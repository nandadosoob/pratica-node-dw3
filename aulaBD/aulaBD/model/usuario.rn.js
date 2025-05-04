
exports.validarUsername = function(username){
    if((username.length >= 5) && (username.length <= 10))
        return true;
    return false;
}