//se importa el framwork express
const {Router} = require('express');
//se importa la conexión a la base de datos
const pool =require('../db');
// se importan todas los controladores para realizar operaciones CRUD
const {getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller')

//se instancia para poder usarlo y hacer las peticiones
const router = Router();
//metodo get para traer todoas las tareas
router.get('/tasks', getAllTasks)
//Metodo get para traer una unica tarea por medio de un id
router.get('/tasks/:id', getTask)
//Metodo post para crear una tarea
router.post('/tasks', createTask)
//Metodo 
router.delete('/tasks/:id',deleteTask)

router.put('/tasks/:id', updateTask)


module.exports = router;