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

function cambioPwd() {
    var oldPwd = document.getElementById("oldPwd").value;
    var newPwd = document.getElementById("newPwd").value;
    var newPwd2 = document.getElementById("newPwd2").value;

    if (oldPwd.length > 0 && newPwd.length > 0 && newPwd2.length > 0)
        if (newPwd != newPwd2)
            alert("La nueva contraseña no concuerda con su confirmación");
        else if (newPwd.length < 8)
            alert("La contraseña debe poseer como mínimo 8 caracteres");
        else if (!validarPwd(newPwd))
            alert("La contraseña debe poseer mayúsculas, minúsculas y números");
}