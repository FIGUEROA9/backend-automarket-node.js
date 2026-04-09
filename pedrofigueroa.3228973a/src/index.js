import express from 'express'
import usuariosroutes from './routes/usuarios.routes.js'
import indexRoutes  from './routes/index.routes.js'
const app = express()



app.use(express.json())
app.use(indexRoutes)
app.use(usuariosroutes)




app.post('/vehiculos' ,(req,res) => res.send ('obteniendo usuarios'))
app.post('/modelos' ,(req,res) => res.send ('obteniendo usuarios'))



app.listen(3000)
console.log ('server ejecutandose')
