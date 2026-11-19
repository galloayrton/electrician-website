/* ==========================================================
   CONTENIDO DE LA PÁGINA — editá solo este archivo para cambiar textos.
   Iconos disponibles: bolt tab home gnd bulb doc tel chat ok warn ig clock moon
   Colores: archivo styles.css (sección COLORES, arriba de todo).
   Estructura y diseño: main.js
   ========================================================== */
const SITE = {
  nombre: "Ayrton Gallo",
  oficio: "Electricista",
  ciudad: "Córdoba Capital",
  categoria: "Categoría 3 en trámite",
  experiencia: "Más de 5 años de experiencia",      // PLACEHOLDER: poné el dato real o borrá esta línea

  // Contacto (PLACEHOLDERS)
  telefono: "351 000 0000",          // como se ve en pantalla
  telefonoLink: "+543510000000",     // para el botón Llamar: +54 + código de área + número
  whatsappLink: "543510000000",      // 54 + código de área + número, sin + ni espacios
  whatsappMensaje: "Hola, necesito un electricista.",
  instagram: "https://instagram.com/tu_usuario",

  // Horarios (sin precios; solo se avisa que la guardia tiene costo adicional)
  horarios: {
    titulo: "Horarios de atención",
    normal: { icono: "clock", titulo: "Horario normal", horas: "8:00 a 18:00 hs",
      texto: "Visitas, presupuestos y trabajos programados en este horario." },
    urgencia: { icono: "moon", titulo: "Guardia de urgencias", horas: "18:00 a 8:00 hs",
      texto: "Para emergencias fuera del horario normal. Tiene un costo adicional que le informamos antes de ir." }
  },

  hero: {
    titulo: "Se cortó la luz.",
    destacado: "Nosotros la arreglamos.",
    texto: "Electricista con experiencia en Córdoba Capital. Atendemos urgencias y trabajos programados en su casa, comercio o industria, con trato amable, explicaciones claras y precio acordado antes de empezar.",
    nota: "Atendemos solo en Córdoba Capital. Al llamar confirmamos su zona y las condiciones de la visita.",
    tarjeta: { titulo: "Llámenos", subtitulo: "Córdoba Capital" }
  },

  confianza: [ "Categoría 3 en trámite", "Más de 5 años de experiencia", "Precio acordado antes de empezar" ],

  servicios: {
    kicker: "Nuestros servicios", titulo: "Qué arreglamos",
    texto: "Trabajamos en viviendas, comercios e industrias. Si no sabe qué necesita, llámenos y se lo explicamos.",
    items: [
      { icono: "bolt", titulo: "Cortocircuitos y cortes de luz", texto: "Buscamos la falla y la reparamos. Si la térmica salta una y otra vez, también lo revisamos." },
      { icono: "tab", titulo: "Tableros y llaves térmicas", texto: "Cambiamos y ordenamos tableros, térmicas y disyuntores para que su casa esté protegida." },
      { icono: "home", titulo: "Instalaciones y cableado", texto: "Instalaciones nuevas, cables viejos que hay que cambiar y circuitos que hace falta ampliar." },
      { icono: "gnd", titulo: "Puesta a tierra", texto: "Instalamos y controlamos la toma a tierra, que protege a su familia de las descargas." },
      { icono: "bulb", titulo: "Luces, tomas e interruptores", texto: "Colocamos y reparamos lámparas, tomacorrientes y llaves de luz que no andan bien." },
      { icono: "doc", titulo: "Certificado de instalación", texto: "Hacemos la revisión y el certificado que piden para trámites con la empresa de luz." },
      { icono: "tab", titulo: "Trabajos industriales", texto: "Tableros industriales, motores, mantenimiento y reparaciones en fábricas, talleres y galpones." }
    ]
  },

  trabajos: {
    kicker: "Trabajos realizados", titulo: "Así quedan nuestros trabajos",
    texto: "Deslice hacia el costado o use las flechas para ver más fotos.",
    // Para usar fotos reales: agregá  foto: "fotos/tablero.jpg"  a cada item (la carpeta fotos va junto a index.html)
    items: [
      { icono: "tab", titulo: "Tablero eléctrico renovado" },
      { icono: "home", titulo: "Instalación en una vivienda" },
      { icono: "bulb", titulo: "Iluminación nueva" },
      { icono: "bolt", titulo: "Trabajo industrial" },
      { icono: "gnd", titulo: "Puesta a tierra" }
    ]
  },

  pasos: {
    kicker: "Cómo trabajamos", titulo: "Cuatro pasos, sin vueltas",
    aviso: { titulo: "Si ve humo, chispas o siente olor a quemado",
      texto: "No toque los cables ni el tablero y aléjese del lugar. Si hay fuego o peligro, llame primero a Bomberos (100) o a Emergencias (911)." },
    items: [
      { titulo: "Nos llama o escribe", texto: "Dígannos su dirección y qué pasó. Si es seguro, mándenos una foto por WhatsApp." },
      { titulo: "Coordinamos la visita", texto: "Confirmamos horario y condiciones de la visita según su zona." },
      { titulo: "Revisamos y le explicamos", texto: "Vemos la falla y le contamos con palabras simples qué hay que hacer y cuánto cuesta." },
      { titulo: "Hacemos el trabajo", texto: "Reparamos, probamos que todo funcione y dejamos el lugar limpio." }
    ]
  },

  faq: {
    kicker: "Dudas comunes", titulo: "Preguntas frecuentes", texto: "Toque una pregunta para ver la respuesta.",
    items: [
      { p: "¿Qué horario tienen?", r: "El horario normal es de 8:00 a 18:00 hs. Entre las 18:00 y las 8:00 hs atendemos urgencias con la guardia de urgencias." },
      { p: "¿Qué es la guardia de urgencias?", r: "Es la atención de emergencias fuera del horario normal, entre las 18:00 y las 8:00 hs. Tiene un costo adicional, que le informamos por teléfono antes de ir." },
      { p: "¿Cuánto cuesta la visita?", r: "Depende de la zona y del trabajo. Se lo decimos por teléfono antes de ir y el presupuesto final se lo damos después de revisar. Sin sorpresas." },
      { p: "¿Llegan a mi barrio?", r: "Trabajamos solo en Córdoba Capital. Pásenos su dirección y le confirmamos." },
      { p: "¿Y si se quedó sin luz toda la cuadra?", r: "Si los vecinos también están sin luz, puede ser un problema de la red y conviene llamar a la empresa distribuidora. Si el problema es solo en su casa, nosotros lo revisamos." },
      { p: "¿Hacen trabajos que no son urgentes?", r: "Sí. Hacemos instalaciones, cambio de cables, luces, puesta a tierra, certificados y trabajos industriales. Llámenos y coordinamos un día cómodo para usted." }
    ]
  },

  cta: { titulo: "Guarde este número para cuando lo necesite", texto: "Horario normal de 8:00 a 18:00 hs. Guardia de urgencias de 18:00 a 8:00 hs." },
  pie: "© 2026 Ayrton Gallo · Electricista · Córdoba Capital, Argentina"
};
