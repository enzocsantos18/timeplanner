
const Category = require('../models/Category');

const { json } = require('sequelize');


class CategoryController{
  async index(req, res){
    const categories = await Category.findAll({
      attributes: ['id', ['name', 'title']]
    });
    
    return res.json(categories)
  }

}

module.exports = new CategoryController();