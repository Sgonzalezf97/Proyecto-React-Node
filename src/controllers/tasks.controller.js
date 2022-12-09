
const getAllTasks = async (req, res) => {
    res.send('retornando la lista de tareas')
}

const getTask = async (req, res) => {
    res.send('retornando la tarea 10')
}

const createTask = (req, res) => {
    res.send('creando la lista de tareas')
}

const deleteTask = (req, res) => {
    res.send('eliminando la lista de tareas')
}

const updateTask = (req, res) => {
    res.send('Actualizando la lista de tareas')
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}