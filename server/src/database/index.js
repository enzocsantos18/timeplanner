const Sequelize = require('sequelize')
const databaseConfig = require('../config/database');
const User =  require('../app/models/User');
const Category =  require('../app/models/Category');
const Project =  require('../app/models/Project');
const Time =  require('../app/models/Time');


const models = [User, Category, Project, Time];
class Database{
  constructor(){
    this.init()
  }

  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models))
  }
}

module.exports = new Database(); 