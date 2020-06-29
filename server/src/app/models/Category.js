const Sequelize = require('sequelize');
const {Model} = require('sequelize')

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  
    return this;
  }
  static associate(models){
    this.hasMany(models.Project,{
      foreignKey: 'category_id',
      as : 'category'
    })
  
  }
}

module.exports = Category;