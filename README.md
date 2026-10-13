# Fernandez, Nocent y Asociados

Sitio institucional estático, sin frameworks ni dependencias de producción.

## Desarrollo y revisión

Desde el directorio del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

La página de entrada es `index.html` (minúsculas). Los recursos usan rutas relativas compatibles con un repositorio de GitHub Pages. No se ha configurado ni ejecutado una publicación. La ruta antigua `Index.html` fue normalizada para que Pages sirva la página de inicio automáticamente.

- `index.html`: contenido, metadatos y datos estructurados de la organización.
- `assets/styles.css`: paleta, componentes y adaptaciones responsive.
- `assets/site.js`: menú móvil y validación local del formulario.
- `assets/favicon.svg`: marca tipográfica local.

No se cargan tipografías, imágenes, rastreadores ni scripts externos. Se conservan completos los antecedentes de los tres profesionales del archivo original.

## Formulario y privacidad

El formulario **no envía ni almacena datos**. El botón «Validar consulta» comprueba campos obligatorios, correo y longitud mínima del mensaje, e informa que la consulta no fue enviada. WhatsApp, teléfono y correo son vías de contacto operativas mediante enlaces. Sin JavaScript, el formulario continúa sin envío habilitado y las vías alternativas permanecen disponibles.

Antes de habilitar envíos: elegir y configurar un servicio o backend, definir el destinatario, implementar validación del lado del servidor y protección contra abuso, y acordar el aviso de privacidad y la gestión de datos. No añadir credenciales al repositorio. Sustituir el comportamiento local solo una vez verificado el servicio; incluir estados reales de éxito y error.

## Datos pendientes antes de una publicación

- Confirmar el dominio o URL final para agregar URL canónica, `og:url` y la URL de la organización; no se inventaron estos valores.
- Confirmar direcciones exactas de CABA y Sáenz Peña y, si corresponde, horarios. Por ahora se indica solo la localidad y se ofrece coordinar una reunión. No hay mapas ni direcciones aproximadas.
- Confirmar la vigencia de los antecedentes profesionales conservados del original.
- Configurar el envío del formulario y el aviso de privacidad si se decide activarlo.
- Revisar y autorizar por separado la publicación en GitHub Pages.

Los mensajes de WhatsApp están precargados por servicio y oficina. No se envía ningún mensaje automáticamente.

## Validación de esta versión

Se comprobó en Chromium con Playwright:

- Respuesta HTTP 200 en la raíz, carga de recursos, destinos de navegación y JSON-LD válido.
- Distribución sin desbordamiento horizontal en anchos de 360, 390, 768, 1024 y 1440 píxeles; revisión visual de escritorio y celular.
- Apertura y cierre del menú móvil, cierre con Escape y retorno del foco al botón.
- Campos obligatorios, correo inválido, contenido vacío y consulta válida; ninguna petición de envío al validar.
- Número y mensajes precargados de WhatsApp; no se enviaron mensajes reales.
- Navegación disponible sin JavaScript y respeto de la preferencia de movimiento reducido.
- Sin errores de JavaScript ni recursos fallidos.
- Axe-core: sin infracciones detectadas en las reglas WCAG 2 A/AA y 2.1 A/AA ejecutadas a 390 y 1440 píxeles. Esto no reemplaza una auditoría manual completa de accesibilidad.
- Antecedentes: comparación de todos los párrafos del equipo con el archivo original, sin cambios.

HTML, CSS, JavaScript y favicon suman aproximadamente 31,5 KB sin comprimir. No se incorporaron dependencias al sitio; las herramientas de verificación se usaron fuera del repositorio. No se verificó el sitio publicado ni otros motores de navegador.
