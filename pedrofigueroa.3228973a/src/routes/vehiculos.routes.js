import { Router} from "express";
import {postVehiculos} from '../controllers/vehiculos.controller.js'
const router = Router()

router.post('/vehiculos' , postVehiculos)

export default router