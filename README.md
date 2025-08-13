# Extensión "Scraping en Zonaprop"

## Descripción

Esta extensión de navegador está diseñada para facilitar la extracción de información de propiedades listadas en el sitio web de Zonaprop. Permite a los usuarios recopilar datos relevantes de forma eficiente para análisis o almacenamiento.

## Características

*   **Extracción de datos:** Recopila información clave de las propiedades.
*   **Fácil de usar:** Interfaz sencilla para iniciar el proceso de scraping.

## Instalación (para Google Chrome/Chromium)

1.  **Descarga la extensión:** Si tienes un archivo `.zip` (como `Scraping en Zonaprop.zip`), descomprímelo en una carpeta.
2.  **Abre el gestor de extensiones:**
    *   Abre Chrome.
    *   Escribe `chrome://extensions` en la barra de direcciones y presiona Enter.
3.  **Activa el "Modo desarrollador":** En la esquina superior derecha de la página de extensiones, activa el interruptor "Modo desarrollador".
4.  **Carga la extensión:**
    *   Haz clic en el botón "Cargar extensión sin empaquetar" (Load unpacked).
    *   Navega hasta la carpeta donde descomprimiste la extensión (o la carpeta raíz del proyecto si no la empaquetaste) y selecciónala.
5.  La extensión debería aparecer ahora en tu lista de extensiones.

## Uso

1.  Navega a una página de listado de propiedades en Zonaprop.
2.  Haz clic en el icono de la extensión en la barra de herramientas de tu navegador (normalmente un icono que aparece después de la instalación).
3.  Sigue las instrucciones o interactúa con la interfaz de la extensión para iniciar el proceso de scraping.

## Archivos Principales

*   `manifest.json`: El archivo de manifiesto de la extensión, que define sus propiedades y permisos.
*   `content.js`: Script que se inyecta en las páginas web de Zonaprop para interactuar con el contenido.
*   `popup.html`: La interfaz de usuario (HTML) que se muestra cuando haces clic en el icono de la extensión.
*   `popup.js`: El script JavaScript que controla la lógica del `popup.html`.