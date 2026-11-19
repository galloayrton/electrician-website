/* Navegador. Si la página ya viene armada (carpeta dist) solo activa el carrusel.
   Si no (modo edición: index.html + config.js + render.js), primero la arma con los datos de config.js. */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  if (!$('app').innerHTML.trim() && typeof SITE !== 'undefined' && typeof renderSite === 'function') {
    var r = renderSite(SITE);
    document.title = r.title;
    $('top').innerHTML = r.top; $('app').innerHTML = r.app; $('pie').innerHTML = r.pie; $('barra').innerHTML = r.barra;
  }
  var t = $('track');
  if (t) {
    var go = function (d) {
      var s = t.querySelector('.slide');
      t.scrollBy({ left: d * (s ? s.getBoundingClientRect().width + 20 : 300), behavior: 'smooth' });
    };
    $('prev').addEventListener('click', function () { go(-1); });
    $('next').addEventListener('click', function () { go(1); });
  }
})();
