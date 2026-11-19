# Página del electricista

## Cómo editar
1. **Textos, teléfono, horarios, servicios, SEO:** `config.js` (los datos de ejemplo están marcados como PLACEHOLDER).
2. **Colores:** bloque COLORES al inicio de `styles.css`.
3. **Diseño de cada sección:** funciones en `render.js`.
4. Para ver los cambios mientras editás, abrí `index.html` en el navegador.

## Cómo publicar (con SEO)
1. Tené Node.js instalado y ejecutá en esta carpeta: `node build.js`
2. Se crea la carpeta `dist/` con la página ya armada, `sitemap.xml` y `robots.txt`.
3. Subí el contenido de `dist/` a tu hosting (por ejemplo Cloudflare Pages) y apuntá tu dominio.
4. Poné el dominio real en `seo.dominio` de `config.js` y volvé a ejecutar `node build.js`.

## Después de publicar
- Dar de alta el sitio en Google Search Console y enviar `https://tudominio/sitemap.xml`.
- Crear y completar la ficha de Google Business Profile (categoría Electricista, zona Córdoba Capital, horarios, fotos, reseñas) con el mismo nombre y teléfono que la página.
- Cuando se sepan los días de atención, se pueden agregar al dato estructurado en `build.js` (openingHoursSpecification).
