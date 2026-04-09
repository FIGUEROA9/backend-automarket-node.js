import {pool}  from '../db.js'

export const postTipoDocumento = async (req, res) => {
    const { nombre } = req.body

    const [rows] = await pool.query(
        `INSERT INTO tipos_documento (nombre) VALUES (?)`,
        [nombre]
    )

    res.send({rows})
}