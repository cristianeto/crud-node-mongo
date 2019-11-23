const express = require('express');
const router = express.Router();

/** Importing model or Shema */
const Task = require('../models/task');

router.get('/', async(req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index',{
        tasks //lo mismo q decir tasks : tasks
    });
});

router.post('/add', async(req, res) => {
    const task = new Task(req.body);
    await task.save(); //Lo almacena en la base de DATOS "save"  //ASync await Evita poner eventos
    res.redirect('/');
});

router.get('/turn/:idTask', async(req, res) => {
    const {idTask} = req.params;
    const task = await Task.findById(idTask);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/edit/:idTask', async(req, res) => {
    const { idTask} = req.params;
    const task = await Task.findById(idTask);
    res.render('edit', {
        task
    });
});

router.post('/edit/:idTask', async(req, res) => {
    const { idTask} = req.params;
    //const task = await Task.findById(idTask);
    await Task.update({_id: idTask}, req.body);
    res.redirect('/');
});

router.get('/delete/:idTask', async(req, res) => {
    const { idTask } = req.params;
    await Task.remove({_id: idTask});// siempre utiizar el wait cuando utilize el mongoose
    res.redirect('/');
});
module.exports = router;