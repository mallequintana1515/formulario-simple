// =================================================================================================
// PROYECTO: Formulario de inscripción a talleres comunitarios
// TEMA: Formularios, validaciones simples, manejo de datos de entrada y mensajes de confirmación.
// NOTA PEDAGÓGICA: Este archivo está explicado con mucho detalle para que el estudiante comprenda
// qué significa cada línea o bloque de código y por qué es necesario dentro del funcionamiento.
// =================================================================================================

// Buscamos en el documento HTML el elemento que tiene el id "formularioInscripcion".
// Ese elemento es el formulario completo que el usuario va a llenar.
// Guardarlo en una constante llamada "formulario" nos permite trabajar con él desde JavaScript.
// Si el id estuviera mal escrito en HTML o aquí, JavaScript no encontraría el formulario y el código fallaría.
const formulario = document.getElementById("formularioInscripcion");

// Buscamos el campo donde el usuario escribe su nombre completo.
// Este campo viene del input HTML que tiene id="nombre".
// Lo guardamos en la constante "nombre" para leer su valor y validar si está completo.
const nombre = document.getElementById("nombre");

// Buscamos el campo donde el usuario escribe su correo electrónico.
// Este campo viene del input HTML que tiene id="correo".
// Lo guardamos en la constante "correo" porque después revisaremos si tiene un formato válido.
const correo = document.getElementById("correo");

// Buscamos el campo donde el usuario escribe su edad.
// Este campo viene del input HTML que tiene id="edad".
// Aunque el input es de tipo number, su valor llega a JavaScript como texto y por eso luego lo convertiremos.
const edad = document.getElementById("edad");

// Buscamos el campo donde el usuario escribe su número de contacto.
// Este campo viene del input HTML que tiene id="contacto".
// Lo tratamos como texto porque necesitamos revisar exactamente cuántos dígitos tiene.
const contacto = document.getElementById("contacto");

// Buscamos la lista desplegable donde el usuario selecciona el taller.
// Este elemento viene del select HTML que tiene id="taller".
// Lo guardamos para comprobar si el usuario eligió una opción real y no dejó la opción vacía.
const taller = document.getElementById("taller");

// Buscamos el área donde el usuario puede escribir una observación o mensaje.
// Este elemento viene del textarea HTML que tiene id="mensaje".
// El mensaje será opcional, pero si el usuario escribe algo, podemos validar que no sea demasiado corto.
const mensaje = document.getElementById("mensaje");

// Buscamos el espacio donde se mostrará el error específico del campo nombre.
// Este elemento es una etiqueta small en HTML con id="errorNombre".
// Usarlo evita mostrar todos los errores en un solo lugar y ayuda al usuario a saber qué debe corregir.
const errorNombre = document.getElementById("errorNombre");

// Buscamos el espacio donde se mostrará el error específico del campo correo.
// Este elemento es una etiqueta small en HTML con id="errorCorreo".
// Allí escribiremos mensajes como: "El correo electrónico no es válido".
const errorCorreo = document.getElementById("errorCorreo");

// Buscamos el espacio donde se mostrará el error específico del campo edad.
// Este elemento es una etiqueta small en HTML con id="errorEdad".
// Allí escribiremos mensajes cuando la edad esté vacía, no sea válida o sea menor de 12.
const errorEdad = document.getElementById("errorEdad");

// Buscamos el espacio donde se mostrará el error específico del campo contacto.
// Este elemento es una etiqueta small en HTML con id="errorContacto".
// Allí mostraremos errores como: "El número debe tener exactamente 10 dígitos".
const errorContacto = document.getElementById("errorContacto");

// Buscamos el espacio donde se mostrará el error específico de la lista de talleres.
// Este elemento es una etiqueta small en HTML con id="errorTaller".
// Lo usamos para indicar que el usuario debe seleccionar un taller antes de enviar.
const errorTaller = document.getElementById("errorTaller");

// Buscamos el espacio donde se mostrará el error específico del mensaje u observación.
// Este elemento es una etiqueta small en HTML con id="errorMensaje".
// Aunque el mensaje es opcional, se puede mostrar un error si el texto escrito es demasiado corto.
const errorMensaje = document.getElementById("errorMensaje");

// Buscamos la zona del HTML donde se mostrará un mensaje general para todo el formulario.
// Este mensaje puede decir que hay errores o que la inscripción fue enviada correctamente.
// Se diferencia de los errores pequeños porque resume el estado general del proceso.
const mensajeGeneral = document.getElementById("mensajeGeneral");

// Buscamos la sección donde se mostrará el resumen final de los datos ingresados.
// Esta sección inicia oculta y solo se muestra cuando todos los datos pasan las validaciones.
const resumenDatos = document.getElementById("resumenDatos");

// Buscamos el párrafo donde escribiremos el resumen de inscripción.
// JavaScript insertará aquí una frase con el nombre, edad, contacto, correo y taller elegido.
const resumenTexto = document.getElementById("resumenTexto");

// Creamos una función llamada "limpiarErrores".
// Una función es un bloque de código reutilizable que se ejecuta cuando la llamamos.
// Esta función deja el formulario sin mensajes de error antes de hacer una nueva validación.
function limpiarErrores() {
    // Dejamos vacío el mensaje de error del nombre para borrar errores anteriores.
    errorNombre.textContent = "";

    // Dejamos vacío el mensaje de error del correo para borrar errores anteriores.
    errorCorreo.textContent = "";

    // Dejamos vacío el mensaje de error de la edad para borrar errores anteriores.
    errorEdad.textContent = "";

    // Dejamos vacío el mensaje de error del contacto para borrar errores anteriores.
    errorContacto.textContent = "";

    // Dejamos vacío el mensaje de error del taller para borrar errores anteriores.
    errorTaller.textContent = "";

    // Dejamos vacío el mensaje de error del área de observaciones para borrar errores anteriores.
    errorMensaje.textContent = "";

    // Quitamos la clase "campo-invalido" del campo nombre para eliminar el borde rojo si lo tenía.
    nombre.classList.remove("campo-invalido");

    // Quitamos la clase "campo-invalido" del campo correo para eliminar el borde rojo si lo tenía.
    correo.classList.remove("campo-invalido");

    // Quitamos la clase "campo-invalido" del campo edad para eliminar el borde rojo si lo tenía.
    edad.classList.remove("campo-invalido");

    // Quitamos la clase "campo-invalido" del campo contacto para eliminar el borde rojo si lo tenía.
    contacto.classList.remove("campo-invalido");

    // Quitamos la clase "campo-invalido" del campo taller para eliminar el borde rojo si lo tenía.
    taller.classList.remove("campo-invalido");

    // Quitamos la clase "campo-invalido" del campo mensaje para eliminar el borde rojo si lo tenía.
    mensaje.classList.remove("campo-invalido");

    // Quitamos la clase "campo-valido" del campo nombre para reiniciar su estado visual.
    nombre.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo correo para reiniciar su estado visual.
    correo.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo edad para reiniciar su estado visual.
    edad.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo contacto para reiniciar su estado visual.
    contacto.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo taller para reiniciar su estado visual.
    taller.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo mensaje para reiniciar su estado visual.
    mensaje.classList.remove("campo-valido");

    // Dejamos vacío el mensaje general para que no aparezca información de una validación anterior.
    mensajeGeneral.textContent = "";

    // Quitamos la clase "error" del mensaje general por si antes se había mostrado un error.
    mensajeGeneral.classList.remove("error");

    // Quitamos la clase "exito" del mensaje general por si antes se había mostrado una confirmación.
    mensajeGeneral.classList.remove("exito");

    // Agregamos la clase "oculto" al resumen para esconderlo antes de validar nuevamente.
    resumenDatos.classList.add("oculto");
}

// Creamos una función llamada "marcarCampo".
// Esta función recibe dos datos: el campo que se va a marcar y si ese campo es válido o no.
// Sirve para evitar repetir muchas veces el mismo código de clases visuales.
function marcarCampo(campo, esValido) {
    // Revisamos si la variable "esValido" es verdadera.
    // Si es verdadera, significa que el campo pasó correctamente la validación.
    if (esValido) {
        // Agregamos la clase "campo-valido" para que el borde del campo se vea verde.
        campo.classList.add("campo-valido");

        // Quitamos la clase "campo-invalido" por si el campo estaba marcado antes como incorrecto.
        campo.classList.remove("campo-invalido");
    } else {
        // Si "esValido" es falso, significa que el campo tiene un error.
        // Agregamos la clase "campo-invalido" para que el borde del campo se vea rojo.
        campo.classList.add("campo-invalido");

        // Quitamos la clase "campo-valido" por si el campo estaba marcado antes como correcto.
        campo.classList.remove("campo-valido");
    }
}

// Creamos una función llamada "correoEsValido".
// Esta función recibe un correo como texto y devuelve true si parece válido o false si no lo parece.
// Usamos una expresión regular sencilla para revisar una estructura básica: texto + arroba + dominio + punto.
function correoEsValido(valorCorreo) {
    // Creamos una regla llamada "patronCorreo".
    // El símbolo ^ indica el inicio del texto y $ indica el final.
    // La regla exige que exista una arroba y un punto después de la arroba.
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Usamos test para comprobar si el correo escrito cumple el patrón.
    // Si cumple, devuelve true; si no cumple, devuelve false.
    return patronCorreo.test(valorCorreo);
}

// Creamos una función llamada "contactoEsValido".
// Esta función recibe el número de contacto como texto y revisa que tenga exactamente 10 dígitos.
// No acepta letras, espacios, guiones ni símbolos porque la regla solo permite números del 0 al 9.
function contactoEsValido(valorContacto) {
    // Creamos una regla llamada "patronContacto".
    // \d significa dígito numérico y {10} significa exactamente diez veces.
    const patronContacto = /^\d{10}$/;

    // Probamos si el contacto cumple la regla de exactamente 10 dígitos.
    // Devuelve true si cumple y false si no cumple.
    return patronContacto.test(valorContacto);
}

// Creamos una función llamada "mostrarMensajeGeneral".
// Esta función muestra un mensaje grande debajo del formulario.
// Recibe el texto del mensaje y el tipo de mensaje: "error" o "exito".
function mostrarMensajeGeneral(texto, tipo) {
    // Insertamos dentro del mensaje general el texto que queremos mostrar al usuario.
    mensajeGeneral.textContent = texto;

    // Quitamos la clase "error" para limpiar estilos anteriores antes de poner el nuevo estilo.
    mensajeGeneral.classList.remove("error");

    // Quitamos la clase "exito" para limpiar estilos anteriores antes de poner el nuevo estilo.
    mensajeGeneral.classList.remove("exito");

    // Agregamos la clase que llega en la variable "tipo".
    // Si tipo es "error", se verá rojo; si tipo es "exito", se verá verde.
    mensajeGeneral.classList.add(tipo);
}

// Agregamos un escuchador de eventos al formulario.
// El evento "submit" ocurre cuando el usuario presiona el botón de enviar o pulsa Enter dentro del formulario.
// La función que sigue se ejecutará automáticamente cada vez que el formulario intente enviarse.
formulario.addEventListener("submit", function (evento) {
    // Evitamos el envío normal del formulario.
    // Esto es necesario porque queremos validar los datos con JavaScript antes de aceptar la inscripción.
    // Si no usamos preventDefault, la página podría recargarse y perderíamos los mensajes de validación.
    evento.preventDefault();

    // Llamamos la función que limpia errores anteriores.
    // Esto permite que cada intento de envío empiece desde cero, sin mensajes viejos en pantalla.
    limpiarErrores();

    // Creamos una variable llamada "formularioValido" y la iniciamos en true.
    // La idea es asumir que todo está correcto hasta que una validación demuestre lo contrario.
    let formularioValido = true;

    // Obtenemos el valor escrito en el campo nombre.
    // trim elimina espacios sobrantes al inicio y al final, evitando aceptar nombres que sean solo espacios.
    const valorNombre = nombre.value.trim();

    // Obtenemos el valor escrito en el campo correo.
    // trim elimina espacios accidentales antes o después del correo.
    const valorCorreo = correo.value.trim();

    // Obtenemos el valor escrito en el campo edad.
    // Number convierte el texto del input en un número para poder compararlo matemáticamente.
    const valorEdad = Number(edad.value);

    // Obtenemos el valor escrito en el campo contacto.
    // trim elimina espacios accidentales que podrían hacer fallar la validación.
    const valorContacto = contacto.value.trim();

    // Obtenemos el valor seleccionado en la lista de talleres.
    // Si el usuario dejó la primera opción, este valor será una cadena vacía.
    const valorTaller = taller.value;

    // Obtenemos el texto escrito en el área de observaciones.
    // trim ayuda a saber si realmente escribió contenido o solo espacios.
    const valorMensaje = mensaje.value.trim();

    // Validamos si el nombre está vacío.
    // Una cadena vacía significa que el usuario no escribió nada útil en ese campo.
    if (valorNombre === "") {
        // Mostramos un mensaje de error específico debajo del campo nombre.
        errorNombre.textContent = "El nombre completo es obligatorio.";

        // Marcamos visualmente el campo como inválido para que el usuario identifique dónde está el problema.
        marcarCampo(nombre, false);

        // Cambiamos formularioValido a false porque ya encontramos un error.
        formularioValido = false;
    } else if (valorNombre.length < 3) {
        // Si el nombre no está vacío, revisamos si tiene menos de 3 caracteres.
        // Esta regla evita aceptar nombres demasiado cortos o incompletos.
        errorNombre.textContent = "El nombre debe tener mínimo 3 caracteres.";

        // Marcamos el campo nombre como inválido porque no cumple la longitud mínima.
        marcarCampo(nombre, false);

        // Indicamos que el formulario completo no es válido.
        formularioValido = false;
    } else {
        // Si el nombre no está vacío y tiene al menos 3 caracteres, se considera correcto.
        // Marcamos el campo como válido para dar retroalimentación visual positiva.
        marcarCampo(nombre, true);
    }

    // Validamos si el correo está vacío.
    // Un formulario de inscripción normalmente necesita correo para comunicación o confirmación.
    if (valorCorreo === "") {
        // Mostramos un error indicando que el correo es obligatorio.
        errorCorreo.textContent = "El correo electrónico es obligatorio.";

        // Marcamos el campo correo como inválido.
        marcarCampo(correo, false);

        // Indicamos que el formulario no puede enviarse todavía.
        formularioValido = false;
    } else if (!correoEsValido(valorCorreo)) {
        // Si el correo no está vacío, usamos la función correoEsValido para revisar su formato.
        // El símbolo ! significa "no"; entonces esta condición dice: si el correo no es válido.
        errorCorreo.textContent = "Escribe un correo válido, por ejemplo: usuario@correo.com.";

        // Marcamos el campo correo como inválido porque no cumple el formato esperado.
        marcarCampo(correo, false);

        // Indicamos que el formulario completo no es válido.
        formularioValido = false;
    } else {
        // Si el correo existe y tiene formato válido, marcamos el campo como correcto.
        marcarCampo(correo, true);
    }

    // Validamos si el campo edad está vacío.
    // Revisamos edad.value porque Number("") puede convertirse en 0 y eso puede confundir la validación.
    if (edad.value.trim() === "") {
        // Mostramos un error indicando que la edad es obligatoria.
        errorEdad.textContent = "La edad es obligatoria.";

        // Marcamos el campo edad como inválido.
        marcarCampo(edad, false);

        // Indicamos que el formulario no es válido.
        formularioValido = false;
    } else if (Number.isNaN(valorEdad)) {
        // Number.isNaN revisa si el valor convertido no es un número real.
        // Esta validación ayuda a evitar datos extraños o inválidos.
        errorEdad.textContent = "La edad debe ser un número válido.";

        // Marcamos el campo edad como inválido.
        marcarCampo(edad, false);

        // Indicamos que el formulario no es válido.
        formularioValido = false;
    } else if (valorEdad < 12) {
        // Revisamos si la edad es menor que 12.
        // Esta regla viene del ejercicio: solo se aceptan personas de 12 años o más.
        errorEdad.textContent = "La edad debe ser mayor o igual a 12 años.";

        // Marcamos el campo edad como inválido porque no cumple la edad mínima.
        marcarCampo(edad, false);

        // Indicamos que el formulario no es válido.
        formularioValido = false;
    } else {
        // Si la edad existe, es número y es mayor o igual a 12, la marcamos como válida.
        marcarCampo(edad, true);
    }

    // Validamos si el número de contacto está vacío.
    // Este dato es importante porque permite comunicarse con la persona inscrita.
    if (valorContacto === "") {
        // Mostramos un error indicando que el contacto es obligatorio.
        errorContacto.textContent = "El número de contacto es obligatorio.";

        // Marcamos el campo contacto como inválido.
        marcarCampo(contacto, false);

        // Indicamos que el formulario no es válido.
        formularioValido = false;
    } else if (!contactoEsValido(valorContacto)) {
        // Si el contacto no está vacío, llamamos contactoEsValido para revisar que tenga exactamente 10 dígitos.
        // El signo ! significa que entramos aquí cuando la función devuelve false.
        errorContacto.textContent = "El número de contacto debe tener exactamente 10 dígitos.";

        // Marcamos el campo contacto como inválido porque no cumple la regla.
        marcarCampo(contacto, false);

        // Indicamos que el formulario completo no es válido.
        formularioValido = false;
    } else {
        // Si el número tiene exactamente 10 dígitos, marcamos el campo como válido.
        marcarCampo(contacto, true);
    }

    // Validamos si el usuario seleccionó un taller.
    // La opción inicial del select tiene value="", por eso podemos detectar si no eligió nada real.
    if (valorTaller === "") {
        // Mostramos un mensaje de error debajo de la lista de talleres.
        errorTaller.textContent = "Selecciona un taller de interés.";

        // Marcamos el select como inválido.
        marcarCampo(taller, false);

        // Indicamos que el formulario no es válido.
        formularioValido = false;
    } else {
        // Si el usuario eligió una opción real, marcamos la lista como válida.
        marcarCampo(taller, true);
    }

    // Validamos el mensaje solo si el usuario escribió algo.
    // Como el mensaje es opcional, no se marca error cuando está vacío.
    if (valorMensaje !== "" && valorMensaje.length < 10) {
        // Si escribió algo, pero tiene menos de 10 caracteres, pedimos una observación más clara.
        errorMensaje.textContent = "Si escribes una observación, debe tener mínimo 10 caracteres.";

        // Marcamos el área de mensaje como inválida.
        marcarCampo(mensaje, false);

        // Indicamos que el formulario no es válido.
        formularioValido = false;
    } else if (valorMensaje !== "") {
        // Si el mensaje no está vacío y tiene mínimo 10 caracteres, lo marcamos como válido.
        marcarCampo(mensaje, true);
    }

    // Revisamos el estado final de la variable formularioValido.
    // Si es false, significa que al menos una validación falló.
    if (!formularioValido) {
        // Mostramos un mensaje general de error para que el usuario sepa que debe corregir campos.
        mostrarMensajeGeneral("Revisa los campos marcados antes de enviar la inscripción.", "error");

        // Usamos return para detener la función en este punto.
        // Esto evita que se muestre el resumen o el mensaje de éxito cuando hay errores.
        return;
    }

    // Si el código llega hasta aquí, significa que todas las validaciones fueron correctas.
    // Mostramos un mensaje general de éxito para confirmar que la inscripción fue aceptada.
    mostrarMensajeGeneral("Inscripción enviada correctamente.", "exito");

    // Quitamos la clase "oculto" de la sección resumen para que ahora sí se vea en pantalla.
    resumenDatos.classList.remove("oculto");

    // Escribimos dentro del resumen una explicación con los datos principales de la inscripción.
    // Usamos template string con comillas invertidas para insertar variables dentro del texto con ${variable}.
    resumenTexto.innerHTML = `
        <strong>${valorNombre}</strong>, de ${valorEdad} años, quedó inscrito(a) al taller
        <strong>${valorTaller}</strong>. La confirmación se enviará al correo
        <strong>${valorCorreo}</strong> y el contacto registrado es
        <strong>${valorContacto}</strong>.
    `;

    // Reiniciamos el formulario para limpiar los campos después de una inscripción correcta.
    // Esto permite que otro usuario pueda llenar el formulario desde cero.
    formulario.reset();

    // Quitamos la clase "campo-valido" de cada campo para que después de limpiar no queden bordes verdes.
    nombre.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo correo después de limpiar el formulario.
    correo.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo edad después de limpiar el formulario.
    edad.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo contacto después de limpiar el formulario.
    contacto.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo taller después de limpiar el formulario.
    taller.classList.remove("campo-valido");

    // Quitamos la clase "campo-valido" del campo mensaje después de limpiar el formulario.
    mensaje.classList.remove("campo-valido");
});
