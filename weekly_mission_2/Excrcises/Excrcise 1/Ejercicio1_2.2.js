const facebook = {

    usuario: "axel.panico.5",
    UserName: "Carlos Axel Panico Balbin",
    url: "https://www.facebook.com/axel.panico.5",

    Perfil: {
        Foto: "./img.jpg",
        Portada: "./toPortada.jpg",
        Historia: ["Crear una historia", "Crear histria de texto"],
        Privasidad: ["Publico", "Amigos", "Personalizado", "Ocultar historia a"],
        Publicaciones: ["Vista de lista", "Vista de cuadros"],
        
    
    Amigos: {
            TodosAmigos: "712",
            AgregdosRecien: "2",
            Cumpleaños: "14 cumpleaños proximos",
            CiudadOrigen: "700",
            Seguidos: "102"},
    
    Fotos: {
        FotosEtiquetado: "29",
        tusFotos: "560",
        Albunes: "2",
        newAlbun: ["Nombre Albun", "Subir fotos y videos", "Publicar"]},
    
    video: tusVideos = "1",
    RegistrosVisitas: recientes = "12",
    deportes: "3",
    musica: ["Crania", "Tenacious D", "Rock Videos", "Rolitas chidas","mUSICA DE LOS 80´S"],
    publicar: "Que estas pensando?"
    
    },

    get GetInfoPerfilBasico (){
        return `Hola me encuentro en facebook como ${this.UserName}, mi url es el ${this.url}, agregame!`
    },

    get infoGeneral (){
        return facebook
    }
     
}

class InformacionFb {
    constructor (vive,De,Relacion,Telefono){

        this.vive = vive
        this.De= De
        this.Relacion= Relacion
        this.Telefono=  Telefono
    }
    privado(){
        console.log("No te puedo mostrar informacion privada")
    }
}
    
let priv = new InformacionFb ("San Jose del Cabo", "Querétaro", "Mariela G", "4426180043")
priv.privado();

console.log(facebook.GetInfoPerfilBasico)
console.log(facebook.infoGeneral)


