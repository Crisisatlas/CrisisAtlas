
// Datos simulados de noticias
const noticiass = [
  
    {
      titulo: "Guerra en Ucrania",
      imagen: "/noticiasact/623ca5fd9.webp",
      resumen: "El conflicto en Ucrania continúa con intensos combates y un alto número de desplazados. La invasión rusa ha llevado a una crisis humanitaria significativa, con miles de civiles muertos y millones de personas desplazadas.",
      enlace: "https://www.acnur.org/noticias/news-releases/sin-la-solidaridad-internacional-la-crisis-del-desplazamiento-de-ucrania"
    },
    {
      titulo: "Crisis Climática",
      imagen: "noticiasact/2.jpg",
      resumen: "El cambio climático sigue causando desastres naturales devastadores. En 2023, se registraron temperaturas récord y numerosos desastres climáticos que afectan a millones de personas en todo el mundo.",
      enlace: "https://www.worldwildlife.org/descubre-wwf/historias/acaso-el-cambio-climatico-esta-aumentando-el-riesgo-de-desastres"
    },
    {
      titulo: "Conflicto en Gaza",
      imagen: "noticiasact/Gaza-edificio.webp",
      resumen: "La situación en Gaza sigue siendo extremadamente tensa, con frecuentes enfrentamientos entre Israel y grupos palestinos. La violencia ha provocado una crisis humanitaria, con numerosos civiles muertos y heridos.",
      enlace: "https://news.un.org/es/story/2023/12/1526807"
    },
    {
      titulo: "Crisis en Sudán",
      imagen: "noticiasact/AP24165715325246.webp",
      resumen: "Sudán enfrenta una de las peores crisis humanitarias actuales, con enfrentamientos violentos que han desplazado a millones de personas. Los esfuerzos diplomáticos para poner fin al conflicto han sido limitados.",
      enlace: "https://www.france24.com/es/%C3%A1frica/20240620-sud%C3%A1n-el-riesgo-de-un-conflicto-%C3%A9tnico-aumenta-entre-enfrentamientos-por-el-control-de-darfur"
    },
    {
      titulo: "Desplazamiento Global",
      imagen: "noticiasact/5.jpg",
      resumen: "El número de personas desplazadas en todo el mundo ha alcanzado un récord de 117 millones, impulsado por conflictos, violencia y desastres naturales. La migración internacional sigue siendo un desafío significativo.",
      enlace: "https://ici.radio-canada.ca/rci/es/noticia/2080583/segun-la-onu-en-2023-hubo-un-record-de-117-millones-de-refugiados-en-el-mundo#:~:text=El%20Alto%20Comisionado%20de%20las,grandes%20cambios%20pol%C3%ADticos%20a%20nivel"
    } ,
     {
      titulo: "El frustrado magnicidio de Trump desafía el futuro político de los EEUU",
      imagen: "noticiasact/6.jpg",
      resumen: "El reciente atentado contra Trump plantea grandes desafíos para su futuro político y las próximas elecciones en EEUU.",
      enlace: "https://elpais.com/us/2024-07-14/el-atentado-a-trump-en-vivo.html"
    }
  ];
  
  // Función para cargar las noticias destacadas 
  function cargarNoticias() {
    const noticiasDestacadasContainer = document.getElementById("noticias-destacadas");
    noticiass.forEach(noticia => {
        const noticiaHTML = `
            <div class="noticia">
                <img src="${noticia.imagen}" alt="${noticia.titulo}">
                <div class="contenido-noticia">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumen}</p>
                    <a href="${noticia.enlace}" target="_blank">Leer más</a>
                </div>
            </div>
        `;
        noticiasDestacadasContainer.innerHTML += noticiaHTML;
    });
  }
  
  // Llama a la función para cargar las noticias destacadas al cargar la página
  window.onload = cargarNoticias;

