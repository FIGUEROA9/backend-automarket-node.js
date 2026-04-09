import express from 'express'
import usuariosroutes from './routes/usuarios.routes.js'
import vehiculosroutes from './routes/vehiculos.routes.js'
import indexRoutes  from './routes/index.routes.js'
import tipo_documentoroutes from  './routes/tipo_documento.routes.js'
import { postTipoDocumento } from './controllers/tipo_documento.controller.js'
const app = express()



app.use(express.json())
app.use(indexRoutes)
app.use(usuariosroutes)
app.use(vehiculosroutes)
app.use(tipo_documentoroutes)

app.post('/modelos' ,(req,res) => res.send ('obteniendo usuarios'))



app.listen(3000)
console.log ('server ejecutandose')
