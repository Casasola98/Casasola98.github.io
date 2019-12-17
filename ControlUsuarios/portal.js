var usuario = "";

function cargarPortal() {
    usuario = window.location.search.substr(1);
    document.getElementById("usuNombre").innerHTML = usuario;
}