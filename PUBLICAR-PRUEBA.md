# Publicar la versión de prueba en GitHub Pages

El sitio está preparado para un repositorio de proyecto: `index.html` está en la raíz y sus recursos usan rutas relativas `assets/...`. No hay compilación ni dependencias que instalar. La publicación debe hacerse desde `redesign/institucional`, sin fusionar con `main`.

## 1. Subir la versión a GitHub

La comprobación realizada durante esta preparación no encontró una rama remota llamada `redesign/institucional`. La rama y los cambios existen en este entorno; configurar Pages sin subirlos no publica esta versión.

Opción recomendada, desde una terminal en la copia que contiene estos cambios:

```sh
cd /workspace/Fernandez-Nocent-y-Asociados
git switch redesign/institucional
git push -u origin redesign/institucional
```

Este procedimiento no ejecutó el push ni publicó el sitio.

Alternativa sin terminal, con el paquete del sitio proporcionado en la conversación:

1. Descargar y descomprimir `fernandez-nocent-pages-prueba.zip`.
2. Abrir el repositorio `ignaciofernandezschiavello-byte/Fernandez-Nocent-y-Asociados` en GitHub.
3. En **Code**, abrir el selector de ramas, escribir `redesign/institucional` y crear esa rama desde `main` si todavía no existe. Si existe, seleccionarla.
4. Confirmar que la rama seleccionada sea `redesign/institucional`.
5. Pulsar **Add file → Upload files** y arrastrar **el archivo `index.html` y la carpeta `assets` juntos** a la carga. No subir el ZIP ni una carpeta contenedora adicional.
6. En **Commit changes**, guardar directamente en `redesign/institucional`. No elegir `main` ni crear o fusionar un pull request.
7. Confirmar que en la raíz de esa rama estén `index.html`, `assets/styles.css`, `assets/site.js` y `assets/favicon.svg`.

La alternativa de carga web conserva la misma versión visual, pero crea su propio commit en GitHub; no sube el historial de la rama local.

## 2. Elegir la fuente de GitHub Pages

1. Abrir **Settings → Pages** dentro del repositorio. Se requieren permisos para modificar esta configuración.
2. En **Build and deployment → Source**, elegir **Deploy from a branch**.
3. En **Branch**, elegir **redesign/institucional** y, en la carpeta, **/ (root)**.
4. Pulsar **Save**.
5. Ir a **Actions** y esperar a que el despliegue **pages build and deployment** finalice correctamente.
6. Volver a **Settings → Pages** y pulsar **Visit site**, o copiar la URL que GitHub muestre.

GitHub Pages tiene un sitio por repositorio: cambiar esta fuente reemplaza el sitio de Pages existente, si lo hubiera, aunque no modifica `main`. Para conservar simultáneamente un sitio ya publicado, usar un repositorio de prueba separado. No crear un pull request ni pulsar Merge para este procedimiento.

## 3. Revisar en Chrome

Sin dominio personalizado, la URL esperada es:

`https://ignaciofernandezschiavello-byte.github.io/Fernandez-Nocent-y-Asociados/`

Usar la URL que muestre Pages si difiere. Abrir la web publicada, no la página de `index.html` en GitHub ni un enlace a su contenido Raw. Si aparece una versión anterior, recargar con Ctrl+Shift+R (Windows/Linux) o Cmd+Shift+R (macOS).

Para revisar recursos: abrir DevTools → Network, recargar y comprobar que `assets/styles.css` y `assets/site.js` tengan estado 200. El CSS debe ser `text/css` y JavaScript un MIME de JavaScript. Activar la barra de dispositivos en DevTools y probar 390 px; luego revisar en escritorio a 1440 px.

El formulario solo valida: no envía consultas. Los contactos por WhatsApp, correo y teléfono permanecen disponibles.

## Evidencia previa a la publicación

Se comprobó con Chromium que el sitio completo carga desde la raíz y desde `/Fernandez-Nocent-y-Asociados/`, en 1440 y 390 px. CSS, JavaScript y favicon devuelven HTTP 200 y MIME correctos; los estilos computados confirman las tipografías, los colores y la grilla responsive. La configuración real de Pages y el sitio publicado quedan pendientes de las acciones anteriores.
