/* Plantillas HTML de la página. Se usan en el navegador (modo edición) y en build.js (versión final para publicar).
   Si querés cambiar el DISEÑO de una sección, editá su función acá. El ORDEN de las secciones está en config.js. */
function renderSite(S) {
  var ic = function (n) { return '<svg class="i"><use href="#' + n + '"/></svg>'; };
  var tel = 'tel:' + S.telefonoLink;
  var wa = 'https://wa.me/' + S.whatsappLink + '?text=' + encodeURIComponent(S.whatsappMensaje);
  var ig = S.instagram;

  var botones = function () {
    return '<div class="botones">' +
      '<a class="btn b1" href="' + tel + '">' + ic('tel') + 'Llamar ahora</a>' +
      '<a class="btn b2" href="' + wa + '">' + ic('chat') + 'WhatsApp</a>' +
      '<a class="btn b3" href="' + ig + '" target="_blank" rel="noopener">' + ic('ig') + 'Instagram</a></div>';
  };
  var titulo = function (o) {
    return '<div class="kicker">' + o.kicker + '</div><h2 class="t">' + o.titulo + '</h2>' +
      (o.texto ? '<p class="sub">' + o.texto + '</p>' : '');
  };

  var secciones = {
    hero: function () {
      var h = S.hero;
      var item = function (o, c) {
        return '<div class="bi ' + c + '"><span class="dot"></span><span>' + o.titulo + ' <strong class="nb">' + o.horas + '</strong></span></div>';
      };
      var banner = '<div class="banner" role="note">' + item(S.horarios.normal, 'bn') + item(S.horarios.urgencia, 'bu') + '</div>';
      return '<div class="hero"><div class="wrap">' + banner + '<div>' +
        '<h1>' + h.titulo + ' <em>' + h.destacado + '</em></h1>' +
        '<p class="lead">' + h.texto + '</p>' + botones() +
        '<p class="nota">' + h.nota + '</p></div>' +
        '<div class="badge"><div class="bolt">' + ic('bolt') + '</div><h2>' + h.tarjeta.titulo + '</h2>' +
        '<p>' + h.tarjeta.subtitulo + '</p><a class="n" href="' + tel + '">' + S.telefono + '</a></div></div></div>';
    },
    confianza: function () {
      return '<div class="trust"><div class="wrap"><ul>' + S.confianza.map(function (t) {
        return '<li>' + ic('ok') + t + '</li>'; }).join('') + '</ul></div></div>';
    },
    servicios: function () {
      var s = S.servicios;
      return '<section id="servicios"><div class="wrap">' + titulo(s) + '<div class="grilla">' +
        s.items.map(function (x) {
          return '<div class="card"><div class="ic">' + ic(x.icono) + '</div><h3>' + x.titulo + '</h3><p>' + x.texto + '</p></div>';
        }).join('') + '</div></div></section>';
    },
    horarios: function () {
      var h = S.horarios;
      var c = function (o, cls) {
        return '<div class="hora ' + cls + '"><div class="ic">' + ic(o.icono) + '</div><h3>' + o.titulo + '</h3>' +
          '<div class="hs">' + o.horas + '</div><p>' + o.texto + '</p></div>';
      };
      return '<section id="horarios"><div class="wrap"><h2 class="t">' + h.titulo + '</h2><div class="horas">' +
        c(h.normal, 'normal') + c(h.urgencia, 'urg') + '</div></div></section>';
    },
    trabajos: function () {
      var t = S.trabajos;
      return '<section id="trabajos"><div class="wrap">' + titulo(t) +
        '<div role="region" aria-roledescription="carrusel" aria-label="' + t.titulo + '">' +
        '<div class="track" id="track" tabindex="0">' + t.items.map(function (x) {
          var media = x.foto ? '<img src="' + x.foto + '" alt="' + x.titulo + '" loading="lazy">'
            : '<div class="ph">' + ic(x.icono) + 'Foto · reemplazar</div>';
          return '<figure class="slide">' + media + '<figcaption>' + x.titulo + '</figcaption></figure>';
        }).join('') + '</div><div class="cnav">' +
        '<button type="button" id="prev" aria-label="Foto anterior">‹</button>' +
        '<button type="button" id="next" aria-label="Foto siguiente">›</button></div></div></div></section>';
    },
    pasos: function () {
      var p = S.pasos;
      return '<section id="atencion"><div class="wrap">' + titulo(p) +
        '<div class="aviso">' + ic('warn') + '<div><strong>' + p.aviso.titulo + '</strong>' + p.aviso.texto + '</div></div>' +
        '<ol class="pasos">' + p.items.map(function (x) {
          return '<li><h3>' + x.titulo + '</h3><p>' + x.texto + '</p></li>'; }).join('') + '</ol></div></section>';
    },
    faq: function () {
      var f = S.faq;
      return '<section id="preguntas"><div class="wrap">' + titulo(f) + f.items.map(function (x) {
        return '<details><summary>' + x.p + '</summary><p>' + x.r + '</p></details>'; }).join('') + '</div></section>';
    },
    cta: function () {
      return '<div class="cta"><div class="wrap"><h2>' + S.cta.titulo + '</h2><p>' + S.cta.texto + '</p>' +
        '<a class="num" href="' + tel + '">' + S.telefono + '</a>' + botones() + '</div></div>';
    }
  };

  var orden = S.orden || ['hero', 'confianza', 'servicios', 'horarios', 'trabajos', 'pasos', 'faq', 'cta'];
  return {
    title: S.nombre + ', ' + S.oficio.toLowerCase() + ' en ' + S.ciudad,
    top: '<div class="wrap"><div class="logo"><span class="m">' + ic('bolt') + '</span><div>' + S.nombre +
      '<small>' + S.oficio + ' · ' + S.ciudad + '</small></div></div>' +
      '<a class="tel" href="' + tel + '">' + ic('tel') + S.telefono + '</a></div>',
    app: orden.map(function (k) { return secciones[k](); }).join(''),
    pie: '<div class="wrap">' + S.pie + ' · <a href="' + tel + '">Tel. ' + S.telefono + '</a></div>',
    barra: '<a href="' + tel + '">' + ic('tel') + 'Llamar</a><a href="' + wa + '">' + ic('chat') + 'WhatsApp</a>' +
      '<a href="' + ig + '" target="_blank" rel="noopener">' + ic('ig') + 'Instagram</a>'
  };
}
if (typeof module !== 'undefined') { module.exports = renderSite; }
