const instagram = [{

    home: {
      insta: {
        seguidos: {
            nombreCuenta: "originalplatano",
            video:  true,
            foto: false,
            meGusta: false,
            comentarios: {
                comentario1: " jajajaja",
                comentario2: "jajaja se parece a otro meme"
            },
            enviar: {
                comentario: "mira esto!",
                agrearPublicacionTuHistoria: false,
                crearGrupo: false,
                constactos: {
                    contacto1: {
                        nombre: "Diego",
                        enviar: false},
                    constacto2:{
                        nombre: "Carlos",
                        enviar: false
                    }},
                buscar: "Pedro"
            }},
        favoritos:{
            agregarFavoritos: "Agregar favoritos"
        }
      },
      tuHistoria: {
          agregarAhistoria: {
                configuracion: {
                  historia: "historia",
                  reels: "reels",
                  videosEnVivo: "videos en vivo",
                  controles: {
                      iniciarConCamarFrontal: true},
                      HerramientasDeCamara:{
                        ladoIzquierdo: true,
                        ladoDerecho: false
                        }
                    },
                galeria: "Selecciona imagen",
                camara: "Sacar foto"
            }
   
},
publicaciones: {
    publicacion1: {
        nombreCuenta: "originalplatano",
        video:  false,
        foto: ["./imagen.jpg", "imagen2.jgp"],
        comentarioFoto: " mira esta super broma!",
        meGusta: true,
        cantMegusta: "1002",
        comentarios: {
            comentario1: " hermoso",
            comentario2: "wooo que bello"
        }},
        publicacion2: {
            nombreCuenta: "inovaccionvitual",
            video:  false,
            foto: ["./imagen.jpg"],
            comentarioFoto: "¿Hay un dia de hardware gratis",
            meGusta: true,
            cantMegusta: "356",
            comentarios: [
                 " hermoso",
                 "wooo que bello"]
        
}}
}}]
console.log("****************************** 1 *********************")
instagram.forEach(userName => console.log(userName.home.publicaciones.publicacion1.nombreCuenta))
instagram.forEach(userName => console.log(userName.home.publicaciones.publicacion2.nombreCuenta))
console.log("***************************** 2 **********************")
const InstaMap = instagram.map(map => map.home.insta.seguidos.comentarios.comentario1)
console.log(InstaMap)

console.log("***************************** 3 **********************")
const insaFilter = instagram.filter(publicaFilter => publicaFilter.home.publicaciones.includes("hermoso"))
console.log(insaFilter)
