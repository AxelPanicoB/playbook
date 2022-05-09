const user = {
    user: "Carlos Axel Panico Balbin",
    userName: "axel_panico",
    followin : 42,
    follower: 1,
    CreacionPerfl: new Date('04/15/2022'),
    topics : ["Entetenimiento", "Creadores digitales","Geografia",
              "Ciencia", "Peliculas & TV", "Gaming"],
    Mensajes: "Done",
    Notificaciones : "Done",

    get GetInfoCuenta (){
        return `Usuario: ${this.userName}, sigue a ${this.followin} cuentas`
    },

    get GetInfoCuentaGen (){
        return user
    }
}

console.log("Twiter")
console.log(user.GetInfoCuenta)
console.log("Informacion general de la cueta:" , user.GetInfoCuentaGen)

