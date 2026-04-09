import {pool}  from '../db.js'

export const postVehiculos = async (req, res) => {
    const {
        codigo_interno,usuario_id,categoria_id,marca_id,modelo_id,anio,kilometraje,precio_venta,departamento,ciudad,descripcion,titulo,estado_publicacion,vistas
    } = req.body

    const [rows] =await pool.query(`INSERT INTO vehiculos (codigo_interno,usuario_id,categoria_id,marca_id,modelo_id,anio,kilometraje,precio_venta,departamento,ciudad,descripcion,titulo,estado_publicacion,vistas
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            codigo_interno,
            usuario_id,
            categoria_id,
            marca_id,
            modelo_id,
            anio,
            kilometraje,
            precio_venta,
            departamento,
            ciudad,
            descripcion,
            titulo,
            estado_publicacion,
            vistas
        ])
    res.send({rows})
}