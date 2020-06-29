const User = require('../models/User')
const Project = require('../models/Project');
const Category = require('../models/Category');

const { json } = require('sequelize');


class ProjectController{
  async index(req, res){
    const projects = await Project.findAll({  include: [
     {
       model: Category,
       attributes: ['name']
     }
    ],
    where:{
      user_id : req.userId
    }
  });

    return res.json(projects)
  }
  async store(req, res){
    const {name, category_id} = req.body;

    try{
      const project = await Project.create({
        name,
        category_id,
        user_id : req.userId
      })
    }
    catch(err){
      return res.status(400).json({error: "Could not create project"})
    }
    

    return res.json(project)
  }
}

module.exports = new ProjectController();