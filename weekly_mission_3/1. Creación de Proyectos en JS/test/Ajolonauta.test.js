const Alojonauta = require("../app/ajolonauta")

describe("Prueba de unidad Ajolonauta", () =>{
    test('Caso de prueba 1: Creación de objeto',() => {
        const woopa = new Alojonauta("Hello")
        expect(woopa.name).toBe("Woopa");
    })
})