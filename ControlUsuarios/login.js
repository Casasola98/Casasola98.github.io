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

function iniciarSesion() {
    var correo = document.getElementById("inputEmail").value;
    var passwd = document.getElementById("inputPassword").value;

    if (passwd.length < 8) {
        alert("La contraseña debe poseer como mínimo 8 caracteres");
    }
    else {
        if (!validarPwd(passwd)) {
            alert("La contraseña debe poseer mayúsculas, minúsculas y números");
        }
        else {
            window.location.href = "portal.html?"+correo;
        }
    }
}