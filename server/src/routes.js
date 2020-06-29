const {Router} = require('express');
const UserController = require("./app/controllers/UserController")
const SessionController = require("./app/controllers/SessionController")
const ProjectController = require("./app/controllers/ProjectController")
const authMiddleware = require("./app/middlewares/auth")



const routes = new Router();

routes.get('/users', (req, res) => {
  return res.json({ok: true});
});
routes.post('/sessions',  SessionController.store);
routes.post('/users',  UserController.store);

routes.use(authMiddleware)

routes.get('/project',  ProjectController.index);
routes.post('/project',  ProjectController.store);




module.exports =  routes;
