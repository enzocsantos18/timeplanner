const Sequelize = require('sequelize');
const {Model} = require('sequelize')

class Time extends Model {
  static init(sequelize) {
    super.init(
      {
        time: Sequelize.INTEGER,

      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.Project)
  }
}

module.exports = Time;