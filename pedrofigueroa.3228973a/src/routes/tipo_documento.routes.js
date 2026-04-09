import { Router } from "express";
import { postTipoDocumento } from '../controllers/tipo_documento.controller.js'

const router = Router()

router.post('/tipo_documento', postTipoDocumento)

export default router