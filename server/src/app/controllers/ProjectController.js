const User = require('../models/User')
const Project = require('../models/Project');
const Category = require('../models/Category');
const Time = require('../models/Time');


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
      return res.json(project)
    }
    catch(err){
      return res.status(400).json({error: "Could not create project"})
    }
    

  }

  async delete(req, res){
    await Time.destroy({
      where:{
        project_id: req.params.id,      }
    })

     const project = await Project.destroy({
        where:{
          id: req.params.id,
          user_id: req.userId
        }
      })

    if(!project){

        res.status(400).json({error: 'Cannot delete project'})
    }



    return res.json({ok: true}) 
  }
}

module.exports = new ProjectController();