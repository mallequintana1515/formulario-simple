const formulario = document.getElementById("formularioInscripcion");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const contacto = document.getElementById("contacto");
const taller = document.getElementById("taller");
const mensaje = document.getElementById("mensaje");
const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorEdad = document.getElementById("errorEdad");
const errorContacto = document.getElementById("errorContacto");
const errorTaller = document.getElementById("errorTaller");
const errorMensaje = document.getElementById("errorMensaje");
const mensajeGeneral = document.getElementById("mensajeGeneral");
const resumenDatos = document.getElementById("resumenDatos");
const resumenTexto = document.getElementById("resumenTexto");
function limpiarErrores() {
    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorEdad.textContent = "";
    errorContacto.textContent = "";
    errorTaller.textContent = "";
    errorMensaje.textContent = "";
    nombre.classList.remove("campo-invalido");
    correo.classList.remove("campo-invalido");
    edad.classList.remove("campo-invalido");
    contacto.classList.remove("campo-invalido");
    taller.classList.remove("campo-invalido");
    mensaje.classList.remove("campo-invalido");
    nombre.classList.remove("campo-valido");
    correo.classList.remove("campo-valido");
    edad.classList.remove("campo-valido");
    contacto.classList.remove("campo-valido");
    taller.classList.remove("campo-valido");
    mensaje.classList.remove("campo-valido");
    mensajeGeneral.textContent = "";
    mensajeGeneral.classList.remove("error");
    mensajeGeneral.classList.remove("exito");
    resumenDatos.classList.add("oculto");
}
function marcarCampo(campo, esValido) {
    if (esValido) {
        campo.classList.add("campo-valido");
        campo.classList.remove("campo-invalido");
    } else {
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");
    }
}
function correoEsValido(valorCorreo) {
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(valorCorreo);
}
function contactoEsValido(valorContacto) {
    const patronContacto = /^\d{10}$/;
    return patronContacto.test(valorContacto);
}
function mostrarMensajeGeneral(texto, tipo) {
    mensajeGeneral.textContent = texto;
    mensajeGeneral.classList.remove("error");
    mensajeGeneral.classList.remove("exito");
    mensajeGeneral.classList.add(tipo);
}
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limpiarErrores();
    let formularioValido = true;
    const valorNombre = nombre.value.trim();
    const valorCorreo = correo.value.trim();
    const valorEdad = Number(edad.value);
    const valorContacto = contacto.value.trim();
    const valorTaller = taller.value;
    const valorMensaje = mensaje.value.trim();
    if (valorNombre === "") {
        errorNombre.textContent = "El nombre completo es obligatorio.";
        marcarCampo(nombre, false);
        formularioValido = false;
    } else if (valorNombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener mínimo 3 caracteres.";
        marcarCampo(nombre, false);
        formularioValido = false;
    } else {
        marcarCampo(nombre, true);
    }
    if (valorCorreo === "") {
        errorCorreo.textContent = "El correo electrónico es obligatorio.";
        marcarCampo(correo, false);
        formularioValido = false;
    } else if (!correoEsValido(valorCorreo)) {
        errorCorreo.textContent = "Escribe un correo válido, por ejemplo: usuario@correo.com.";
        marcarCampo(correo, false);
        formularioValido = false;
    } else {
        marcarCampo(correo, true);
    }
    if (edad.value.trim() === "") {
        errorEdad.textContent = "La edad es obligatoria.";
        marcarCampo(edad, false);
        formularioValido = false;
    } else if (Number.isNaN(valorEdad)) {
        errorEdad.textContent = "La edad debe ser un número válido.";
        marcarCampo(edad, false);
        formularioValido = false;
    } else if (valorEdad < 12) {
        errorEdad.textContent = "La edad debe ser mayor o igual a 12 años.";
        marcarCampo(edad, false);
        formularioValido = false;
    } else {
        marcarCampo(edad, true);
    }
    if (valorContacto === "") {
        errorContacto.textContent = "El número de contacto es obligatorio.";
        marcarCampo(contacto, false);
        formularioValido = false;
    } else if (!contactoEsValido(valorContacto)) {
        errorContacto.textContent = "El número de contacto debe tener exactamente 10 dígitos.";
        marcarCampo(contacto, false);
        formularioValido = false;
    } else {
        marcarCampo(contacto, true);
    }
    if (valorTaller === "") {
        errorTaller.textContent = "Selecciona un taller de interés.";
        marcarCampo(taller, false);
        formularioValido = false;
    } else {
        marcarCampo(taller, true);
    }
    if (valorMensaje !== "" && valorMensaje.length < 10) {
        errorMensaje.textContent = "Si escribes una observación, debe tener mínimo 10 caracteres.";
        marcarCampo(mensaje, false);
        formularioValido = false;
    } else if (valorMensaje !== "") {
        marcarCampo(mensaje, true);
    }
    if (!formularioValido) {
        mostrarMensajeGeneral("Revisa los campos marcados antes de enviar la inscripción.", "error");
        return;
    }
    mostrarMensajeGeneral("Inscripción enviada correctamente.", "exito");
    resumenDatos.classList.remove("oculto");
    resumenTexto.innerHTML = `
        <strong>${valorNombre}</strong>, de ${valorEdad} años, quedó inscrito(a) al taller
        <strong>${valorTaller}</strong>. La confirmación se enviará al correo
        <strong>${valorCorreo}</strong> y el contacto registrado es
        <strong>${valorContacto}</strong>.
    `;
    formulario.reset();
    nombre.classList.remove("campo-valido");
    correo.classList.remove("campo-valido");
    edad.classList.remove("campo-valido");
    contacto.classList.remove("campo-valido");
    taller.classList.remove("campo-valido");
    mensaje.classList.remove("campo-valido");
});
