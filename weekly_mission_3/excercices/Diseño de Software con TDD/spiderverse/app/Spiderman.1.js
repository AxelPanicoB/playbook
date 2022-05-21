class Spiderman {
    constructor(peli, edad, actor, peliculas,studio) {
        this.peli = peli;
        this.edad = edad;
        this.actor = actor;
        this.peliculas = peliculas;
        this.studio = studio;
        
    
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.studio} Studio`
    }
}
module.exports = Spiderman;
