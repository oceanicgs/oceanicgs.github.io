# Página Web con HTML, CSS y JavaScript

Este repositorio contiene una página web que incluye código HTML, CSS y JavaScript. La página está diseñada para ser utilizada como parte de un **Google Site** y utiliza archivos externos de estilo y scripts que se encuentran en este repositorio.

## Características

- Código HTML básico para mostrar el contenido.
- Archivos CSS para dar estilo a los componentes.
- Archivos JavaScript para agregar interactividad a la página.

## Cómo Usar en Google Sites

### 1. Subir Archivos a un Hosting (GitHub Pages)

Para poder utilizar los archivos CSS y JavaScript en Google Sites, primero debes subir estos archivos a un servidor que permita acceso público, como **GitHub Pages**.

#### Pasos:
1. Crea un repositorio en GitHub.
2. Sube los archivos HTML, CSS, y JavaScript a tu repositorio.
3. Activa **GitHub Pages** desde la configuración del repositorio:
   - Ve a la pestaña de "Settings" (Configuración).
   - Desplázate hasta **GitHub Pages** y selecciona la rama (branch) donde están los archivos, normalmente `main`.
   - Obtendrás una URL como `https://usuario.github.io/repositorio/archivo.css` para tu archivo CSS.

### 2. Incluir el Código en Google Sites

Para utilizar los archivos CSS y JS en **Google Sites**, sigue estos pasos:

#### Incluir HTML:
1. En **Google Sites**, edita la página donde quieres insertar el código HTML.
2. Agrega un **Bloque de HTML** desde la opción **Incrustar** > **Incrustar código**.
3. Copia el contenido de tu archivo `index.html` y pégalo en el bloque de HTML en Google Sites.

#### Incluir CSS:
1. En el código HTML incrustado, enlaza tu archivo CSS desde GitHub Pages.
   
   Por ejemplo:
   ```html
   <link rel="stylesheet" href="https://usuario.github.io/repositorio/archivo.css">
