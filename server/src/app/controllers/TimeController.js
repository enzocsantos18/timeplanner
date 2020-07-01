
const Time = require('../models/Time');



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

}

module.exports = new TimeController();