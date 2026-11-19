#!/usr/bin/env node
/* Uso:  node build.js
   Lee config.js y genera la carpeta dist/ lista para subir (index.html ya armado, sitemap.xml, robots.txt, etc.) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = __dirname, dist = path.join(dir, 'dist');
const S = vm.runInNewContext(fs.readFileSync(path.join(dir, 'config.js'), 'utf8') + ';SITE', {});
const r = require('./render.js')(S);
const seo = S.seo, base = seo.dominio.replace(/\/+$/, ''), url = base + '/';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const hoy = new Date().toISOString().slice(0, 10);

const ld = {
  '@context': 'https://schema.org', '@type': 'Electrician',
  name: S.nombre + ' – ' + S.oficio, description: seo.descripcion, url, telephone: S.telefonoLink,
  areaServed: { '@type': 'City', name: 'Córdoba' },
  address: { '@type': 'PostalAddress', addressLocality: 'Córdoba', addressRegion: 'Córdoba', addressCountry: 'AR' },
  sameAs: [S.instagram],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: S.servicios.titulo,
    itemListElement: S.servicios.items.map(x => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: x.titulo, description: x.texto } })) }
};
if (seo.imagen) ld.image = base + '/' + seo.imagen;

const head = [
  '<meta name="description" content="' + esc(seo.descripcion) + '">',
  '<link rel="canonical" href="' + url + '">',
  '<meta name="theme-color" content="#23282f">',
  '<meta property="og:type" content="website">',
  '<meta property="og:locale" content="es_AR">',
  '<meta property="og:title" content="' + esc(seo.titulo) + '">',
  '<meta property="og:description" content="' + esc(seo.descripcion) + '">',
  '<meta property="og:url" content="' + url + '">',
  seo.imagen ? '<meta property="og:image" content="' + base + '/' + seo.imagen + '">' : '',
  '<meta name="twitter:card" content="' + (seo.imagen ? 'summary_large_image' : 'summary') + '">',
  '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'.9em\' font-size=\'90\'%3E⚡%3C/text%3E%3C/svg%3E">',
  '<script type="application/ld+json">' + JSON.stringify(ld).replace(/</g, '\\u003c') + '</script>'
].filter(Boolean).join('\n');

let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const put = (a, b) => { if (!html.includes(a)) throw new Error('No encuentro en index.html: ' + a); html = html.replace(a, () => b); };
html = html.replace(/<title>.*?<\/title>/, () => '<title>' + esc(seo.titulo) + '</title>');
put('<!--SEO-->', head);
put('<header class="top" id="top"></header>', '<header class="top" id="top">' + r.top + '</header>');
put('<main id="app"></main>', '<main id="app">' + r.app + '</main>');
put('<footer id="pie"></footer>', '<footer id="pie">' + r.pie + '</footer>');
put('<nav class="barra" id="barra" aria-label="Contacto rápido"></nav>', '<nav class="barra" id="barra" aria-label="Contacto rápido">' + r.barra + '</nav>');
put('<script src="config.js"></script>\n', '');
put('<script src="render.js"></script>\n', '');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);
fs.writeFileSync(path.join(dist, 'index.html'), html);
['styles.css', 'main.js'].forEach(f => fs.copyFileSync(path.join(dir, f), path.join(dist, f)));
['fotos'].forEach(f => { if (fs.existsSync(path.join(dir, f))) fs.cpSync(path.join(dir, f), path.join(dist, f), { recursive: true }); });
if (seo.imagen && fs.existsSync(path.join(dir, seo.imagen))) fs.copyFileSync(path.join(dir, seo.imagen), path.join(dist, seo.imagen));
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>' + url + '</loc><lastmod>' + hoy + '</lastmod></url>\n</urlset>\n');
fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + base + '/sitemap.xml\n');
console.log('Listo: carpeta dist/ generada (' + url + ')');
