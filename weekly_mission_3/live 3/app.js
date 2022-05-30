const express =  require('express')
const app = express()
const port = 3000 // localhost:3000

//localhost:3000
app.get('/', (req, res)=>{
    res.send("Hola bienvenido")
})

//localhost:3000/LaunchX
app.get('/launchx', (req, res)=>{
    res.send("Bienvenidos a LauchX")
})

//localhost:3000/Node
app.get('/node', (req, res)=>{
    const exporer1 = {id:1, name:"Explorer1"}
    const exporer2 = {id:2, name:"Explorer2"}
    const exporer3 = {id:3, name:"Explorer3"}
    const exporer4 = {id:4, name:"Explorer4"}
    res.send([exporer1, exporer2, exporer3, exporer4])
})

//localhost:3000/explorers/AxelPanicoB
app.get('/explorers/:explorer', (req, res)=>{
    console.log(req.params)//{explorer: 'Axel'}
    res.send(req.params)
})


app.listen(port, () => {
    console.log("Server Listo")
})