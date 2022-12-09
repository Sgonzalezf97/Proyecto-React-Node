// se importa la conexión a la base de datos
const pool = require('../db')
//Hace un select a todas las tareas existentes y las devuelve en un json (por medio del metodo get)
const getAllTasks = async (req, res) => {
    try {
        const allTasks = await pool.query("SELECT * FROM task " );
        res.json(allTasks.rows)
    } catch (error) {
        next(error);
    }
}
// hace un select a una sola tarea dando el id, devolviendo los datos de la tarea en un json, en caso de no existir envia un error (por medio del metodo get)
const getTask = async (req, res, next) => {
   try {
    const {id}= req.params
    const result = await pool.query("SELECT * FROM task WHERE id = $1 ",[id])
    console.log(result)
    if (result.rows.length === 0)
        return res.status(404).json({
            message : 'Tarea no encontrada'
        })
    res.json(result.rows[0]);
   } catch (error) {
    next(error);
   }
}
//Crea una tarea pasandole los parametros por medio de un json (por medio del metodo post )
const createTask = async (req, res, next) => {
    const {title,description} = req.body

    try {
        const result = await pool.query("INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",[
            title,
            description
        ])
        //console.log(result)
        res.json(result.rows[0])
    } catch (error) {
        next(error);
    }
}
//Elimina una tarea pasandole el parametro del id 
const deleteTask = async (req, res, next) => {
    const {id}= req.params
    console.log(req.params.id)
    try {
        const result = await pool.query("DELETE FROM task WHERE id = $1 RETURNING *",[id])
    console.log(result)
    if (result.rowCount === 0)
        return res.status(404).json({
            message: "No se ha eliminado la tarea"
        });
    console.log("se ha eliminado la tarea correctamente");
    return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
    
}
//Actualiza una tarea recibiendo los nuevos parametros
const updateTask = async(req, res, next) => {
    const {id}= req.params;
    const {title,description} = req.body;

    try {
        const result = await pool.query("UPDATE task SET title = $1,description = $2 WHERE id = $3 RETURNING *",[title,description,id]);
    if (result.rows.length === 0)
        return res.status(404).json({
            message: "Tarea no encontrada",
        });

    return res.json (result.rows[0])
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}