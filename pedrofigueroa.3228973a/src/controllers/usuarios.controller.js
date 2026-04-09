import {pool}  from '../db.js'

export const postUsuarios = async (req, res) => {
    const {
        nombre,email, password,tipo_usuario,telefono,whatsapp,verificado_email,verificado_telefono,tipo_documento_id,fecha_expedicion,fecha_nacimiento
    } = req.body

    const [rows] =await pool.query(`INSERT INTO usuarios (nombre,email,password,tipo_usuario,telefono,whatsapp,verificado_email,verificado_telefono,tipo_documento_id,fecha_expedicion,fecha_nacimiento
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            nombre,
            email,
            password,
            tipo_usuario,
            telefono,
            whatsapp,
            verificado_email,
            verificado_telefono,
            tipo_documento_id,
            fecha_expedicion,
            fecha_nacimiento
        ])
    res.send({rows})
}