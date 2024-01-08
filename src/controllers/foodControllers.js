import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getFood = async (req, res) => {
    try {
      let data = await conn.food.findAll(

      );
      res.send(data);
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  export {
getFood
  }