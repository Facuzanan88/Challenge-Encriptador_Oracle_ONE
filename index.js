let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let btnCopiar = document.querySelector(".btn-copiar");
let btnLimpiar = document.querySelector(".btn-limpiar");

let imagen = document.querySelector(".contenedor-imagen");
let titulo = document.querySelector(".contenedor-titulo");
let parrafo = document.querySelector(".contenedor-parrafo");

let area = document.querySelector(".textarea");

let resultado = document.querySelector(".resultado")

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnLimpiar.onclick = limpiar;

function encriptar() {
    ocultarSection();
    resultado.textContent = textoEncriptado(recuperarTexto());
}

function desencriptar() {
    ocultarSection();
    resultado.textContent = textoDesencriptado(recuperarTexto());
}

function copiar() {
    console.log(resultado.innerHTML)
    area.value = (resultado.innerHTML);
}

function limpiar() {
    area.value = "";
    activeSection();
}

let recuperarTexto = () => {
    let area = document.querySelector(".textarea")
    return removeAccents(area.value.toLowerCase());
}

let ocultarSection = () => {
    imagen.classList.add("ocultar");
    titulo.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

let activeSection = () => {
    imagen.classList.remove("ocultar");
    titulo.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
}

function textoEncriptado(mensaje) {
    let resultado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
    return resultado;
}

function textoDesencriptado(mensaje) {
    let resultado = mensaje.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
    return resultado;
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 