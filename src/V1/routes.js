const router = require('express-promise-router')();

// user apis
const userService = require('./services/user.service');
const userEndpoint = require('./endpoints/user.endpoint');

router.post('/user', (req, res) => userEndpoint.createUser(userService, req, res));
router.get('/user', (req, res) => userEndpoint.getUser(userService, req, res));

// task apis
const taskService = require('./services/task.service');
const taskEndpoint = require('./endpoints/task.endpoint');

router.post('/task', (req, res) => taskEndpoint.createTask(taskService, req, res));
router.get('/task', (req, res) => taskEndpoint.listUserTasks(taskService, req, res));
router.put('/task', (req, res) => taskEndpoint.updateUserTask(taskService, req, res));
router.delete('/task', (req, res) => taskEndpoint.deleteTask(taskService, req, res));

module.exports = router;
