function encriptar(){
    let texto = document.getElementById("texto").value;
    let mensajeTitulo = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("parrafo");
    let mensaje = document.getElementById("mensaje").value;

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0){
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("mensaje-titulo").textContent = "Texto encriptado con éxito";
        document.getElementById("parrafo").textContent= "";
        document.getElementById("mensaje").value = textoCifrado;
    }else{
        alert("Ingresa algún texto");
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let mensajeTitulo = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("parrafo");
    let mensaje = document.getElementById("mensaje").value;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.length != 0){
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("mensaje-titulo").textContent = "Texto desencriptado con éxito";
        document.getElementById("parrafo").textContent= "";
        document.getElementById("mensaje").value = textoCifrado;
    }else{
        alert("Ingresa algún texto");
    }
}
function copiar() {
    var mensajeTextarea = document.getElementById("mensaje");
    mensajeTextarea.select();
    mensajeTextarea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");
}