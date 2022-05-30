// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000


// localhost:3000/v1/explorers
app.get('/v1/explorers', (req,res) =>{
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Axel1"}
    const explorer2 = {id: 2, name: "Axel2"}
    const explorer3 = {id: 3, name: "Axel3"}
    const explorer4 = {id: 4, name: "Axel4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)

})

/* GET Crea un endpoint que te regrese un explorer mediando un ID */
 // localhost:3000/v1/explorers/:id
app.get('/v1/explorers/:id'), (req,res) =>{
    console.log(`Api Explorers GET Request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Axel"}
    res.status(200).json(explorer)
}

//POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req,res)=>{
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody =  req.body //Prametros de un cliente
    res.status(201).json({message: "Created"})
})

/* PUT Crea un endpoint que se encargue de actualizar un explorer */
app.put('/v1/explorers/:id', (req,res) =>{
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const reuqestBody  = red.body // Parametros de un cliente
    res.estatus(200).json({message:"Updated!"})
})

/* DELETE Crea un endpoint para eliminar un explorer */
app.delete('/v1/explorers/:id', (req,res) =>{
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parametros de un cliente
    res.status(200).json({message:  "Deleted"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})