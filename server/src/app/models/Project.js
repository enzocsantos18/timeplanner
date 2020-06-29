const Sequelize = require('sequelize');
const {Model} = require('sequelize')

class Project extends Model {
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
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
    })
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
    })
    this.hasMany(models.Time,{
      foreignKey: 'project_id',
      as : 'project'

    })
  }
}

module.exports = Project;