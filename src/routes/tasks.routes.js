const {Router} = require('express');
const pool =require('../db');
const {getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller')


const router = Router();

router.get('/tasks', getAllTasks)
    //const result = await pool.query('SELECT NOW()')
    //console.log(result)
    //res.json(result.rows[0].now)

router.get('/tasks/10', getTask)

router.post('/tasks', createTask)

router.delete('/tasks',deleteTask)

router.put('/tasks', updateTask)


module.exports = router;