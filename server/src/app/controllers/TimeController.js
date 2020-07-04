
const Time = require('../models/Time');
const sequelize = require("sequelize")
const moment = require("moment")
const { QueryTypes } = require('sequelize');
const { findByPk } = require('../models/Time');
const Op = sequelize.Op;


class TimeController{

  async store(req, res){
    const {time, project_id} = req.body;

    try{
      const timeResponse = await Time.create({
        time, project_id
      })
      return res.json(timeResponse)
    }
    catch(err){
      return res.status(400).json({error: "Could not create time"})
    }
    
  }

  async index(req, res){
    const {id} = req.params;

    const total = await Time.findOne({
      attributes: [[sequelize.fn('sum', sequelize.col('time')), 'total']],
      where:{
        project_id : id
      }
    });
    const utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    const day = await Time.findOne({
      attributes: [[sequelize.fn('sum', sequelize.col('time')), 'day']],
      where:{
        project_id : id,
        created_at :  { [Op.between]: [`${utc}T00:00:00.000Z`, `${utc}T23:59:59.000Z`] } 
      }
    });
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    function leftPad(value, totalWidth, paddingChar) {
      var length = totalWidth - value.toString().length + 1;
      return Array(length).join(paddingChar || '0') + value;
    };
    
    
    const month = await Time.findOne({
      attributes: [[sequelize.fn('sum', sequelize.col('time')), 'month']],
      where: sequelize.literal(`project_id = ${id} and created_at like "%${currentYear}-${leftPad(currentMonth, 2)}%"`)     
    }); 
    const lastWeekDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
    const todayDate = moment().add(1, 'days').format('YYYY-MM-DD')
    const week = await Time.findOne({
      attributes: [[sequelize.fn('sum', sequelize.col('time')), 'week']],
      where: sequelize.literal(`project_id = ${id} and created_at between "${lastWeekDate}" and "${todayDate}"`)     
    }); 
   
    return res.json({
      day: day.dataValues.day || 0,
      total: total.dataValues.total || 0,
      month: month.dataValues.month|| 0,
      week: week.dataValues.week || 0
    }

      



    )
    
  }

}

module.exports = new TimeController();