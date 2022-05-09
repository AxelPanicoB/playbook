const Uber = {

profile: {
    userName: "Carlos Axel Panico Balbin",
    calificacion: "5.0",
    ayuda: {
        viajes: {
            estatus: "Ultimo vaje",
            fecha: new Date('01/17/2022'),
            presio: "150.35 mnx",
            ayuda: "Selecciona un viaje",
            cuentaYpago:"Opciones de pago",
            más: "Preguntas"
    },
    pago: {
        Billetera:{
            uberCash: "00.00",
            agregarFondos: "Agregar fondos",
            MetodosPago: "Mastercad xxx-xxx-xxx-xx32",
            promociones: "Agregar un codigo promo"
        }
    },
    viajes: {
        viaje1: new Date('01/17/2022'),
        hora: "7:53pm",
        monto: "150.35 mnx",
        calificacion: "5 estrellas",
        Ubicacion: "Kia san jose del cabo"
    },
    rewards:"306 puntos",
    mensajes:"Done",
    configuracion: {
        ubicacionesGuardadas: ["Casa","Oficina","Novia" ],
        seguridad: ["Contactos de confianza", "Verfica viaje", "RideCheck"],
        cerrarSesion :"Cerrar sesion"
    },
    legal: ["Derechos de propiedad", "Terminos y Condiciones", "Politicas de privaciodad"]
}

},

Inicio: {
    userName: "Carlos Axel Panico Balbin",
    Destino: "Direccion de destino",
    viajes: "Detinos anteriores",
    UbersCercanos: "Mapa"
},

get getInfoPerfil (){
     return `Hola! ${this.profile.userName}, tienes una calificacion de ${this.profile.calificacion}, tu ultimo viaje fue el ${this.profile.ayuda.viajes.fecha}`
}

}

console.log(Uber.getInfoPerfil)