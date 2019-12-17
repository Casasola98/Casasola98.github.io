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

function registro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("inputEmail").value;
    var passwd = document.getElementById("inputPassword").value;
    var celular = document.getElementById("celular").value;
    var birthd = document.getElementById("birthd").value;

    if (nombre.length > 0 && apellido.length > 0 && correo.length > 0 &&
        passwd.length > 0 && celular.length > 0 && birthd.length > 0) {
        if (passwd.length < 8)
            alert("La contraseña debe poseer como mínimo 8 caracteres");
        else if (!validarPwd(passwd))
            alert("La contraseña debe poseer mayúsculas, minúsculas y números");
    }
}
