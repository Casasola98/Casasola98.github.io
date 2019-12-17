function validarPwd(passwd) {
    var mayus = false;
    var minus = false;
    var num = false;

    for (var i = 0; i < passwd.length; i++) {
        if (passwd.charCodeAt(i) >= 65 && passwd.charCodeAt(i) <= 90) {
            mayus = true;
        }
        else if (passwd.charCodeAt(i) >= 97 && passwd.charCodeAt(i) <= 122) {
            minus = true;
        }
        else if (passwd.charCodeAt(i) >= 48 && passwd.charCodeAt(i) <= 57) {
            num = true;
        }
    }
    if (mayus && minus && num) {
        return true;
    }
    return false;
}

function olvidaPwd() {
    var correo = document.getElementById("inputEmail").value;

    //Envia el correo
    if (correo.length > 0)
        alert("Un email con una contraseña temporal ha sido enviado a correo");
}
