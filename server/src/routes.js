const {Router} = require('express');
const UserController = require("./app/controllers/UserController")
const SessionController = require("./app/controllers/SessionController")
const ProjectController = require("./app/controllers/ProjectController")
const CategoryController = require("./app/controllers/CategoryController")
const TimeController = require("./app/controllers/TimeController")


const authMiddleware = require("./app/middlewares/auth")



const routes = new Router();

routes.get('/users', (req, res) => {
  return res.json({ok: true});
});
routes.post('/sessions',  SessionController.store);
routes.post('/users',  UserController.store);

routes.use(authMiddleware)

routes.get('/projects',  ProjectController.index);
routes.post('/projects',  ProjectController.store);
routes.delete('/projects/:id',  ProjectController.delete);
routes.get('/categories',  CategoryController.index);
routes.post('/time',  TimeController.store);







module.exports =  routes;
