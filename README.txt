# Formulario de Inscripción a Talleres Comunitarios

Proyecto web educativo que implementa un formulario de inscripción con validaciones personalizadas en JavaScript puro, sin librerías externas. Diseñado con fines pedagógicos: cada archivo está comentado línea por línea para facilitar el aprendizaje.

---

## Estructura del proyecto

```
formulario-taller-comunitario-comentado/
├── index.html      → Estructura semántica del formulario
├── estilos.css     → Diseño visual y diseño responsivo
├── script.js       → Lógica de validación y mensajes (comentado en detalle)
└── README.md       → Documentación del proyecto
```

---

## Cómo ejecutar el proyecto

1. Descarga o descomprime la carpeta del proyecto.
2. Abre la carpeta en **Visual Studio Code**.
3. Abre el archivo `index.html` directamente en el navegador, o usa la extensión **Live Server** para verlo en tiempo real.
4. Completa el formulario con datos válidos e inválidos para probar las validaciones.

> No requiere instalación de dependencias ni servidor backend.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica del formulario |
| CSS3 | Diseño visual, Flexbox, Grid y media queries |
| JavaScript (ES6+) | Validaciones, manipulación del DOM y eventos |

---

## Validaciones implementadas

| Campo | Regla |
|---|---|
| Nombre completo | Obligatorio, mínimo 3 caracteres |
| Correo electrónico | Obligatorio, formato válido (`usuario@dominio.com`) |
| Edad | Obligatoria, debe ser un número mayor o igual a 12 |
| Número de contacto | Obligatorio, exactamente 10 dígitos numéricos |
| Taller de interés | Obligatorio, debe seleccionarse una opción válida |
| Observación / Mensaje | Opcional; si se escribe, debe tener mínimo 10 caracteres |

---

## Características del diseño

- **Responsivo:** se adapta a celulares, tabletas y computadores mediante media queries (`max-width: 640px`).
- **Retroalimentación visual:** los campos se marcan en verde (válido) o rojo (inválido) al intentar enviar.
- **Mensajes de error individuales:** cada campo muestra su propio mensaje descriptivo debajo.
- **Mensaje general:** al enviar, aparece un banner de éxito (verde) o error (rojo) según el resultado.
- **Resumen de inscripción:** si todos los datos son válidos, se muestra un resumen con los datos ingresados.

---

## Funciones principales en `script.js`

| Función | Descripción |
|---|---|
| `limpiarErrores()` | Reinicia todos los mensajes de error y clases visuales antes de cada validación |
| `marcarCampo(campo, esValido)` | Aplica la clase `campo-valido` o `campo-invalido` según el resultado |
| `correoEsValido(valor)` | Valida el formato del correo con expresión regular |
| `contactoEsValido(valor)` | Verifica que el contacto tenga exactamente 10 dígitos numéricos |
| `mostrarMensajeGeneral(texto, tipo)` | Muestra el banner de éxito o error debajo del formulario |
| Evento `submit` | Intercepta el envío, ejecuta todas las validaciones y muestra el resumen si todo es correcto |

---

## Casos de prueba sugeridos

**Datos válidos de ejemplo:**
- Nombre: `Laura Gómez`
- Correo: `laura@correo.com`
- Edad: `25`
- Contacto: `3001234567`
- Taller: `Programación web básica`
- Observación: `Me interesa aprender desde cero.`

**Casos de error para probar:**
- Dejar el nombre vacío o escribir solo `Lu`
- Escribir un correo sin arroba: `lauracorreo.com`
- Ingresar una edad de `8`
- Escribir un contacto de 7 dígitos: `3001234`
- No seleccionar ningún taller
- Escribir una observación de solo 5 caracteres

---

## Propósito pedagógico

Este proyecto está orientado a estudiantes que están aprendiendo desarrollo web. El archivo `script.js` incluye comentarios explicativos en cada línea o bloque de código, cubriendo conceptos como:

- Selección de elementos del DOM con `getElementById`
- Manejo del evento `submit` y uso de `preventDefault()`
- Validaciones con condicionales `if / else if / else`
- Expresiones regulares básicas (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Manipulación de clases CSS con `classList`
- Uso de template strings para generar HTML dinámico

---

## Autor
mallerli quintana  correa
