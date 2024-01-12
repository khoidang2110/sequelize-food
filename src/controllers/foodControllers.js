import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getFood = async (req, res) => {
    try {
      let data = await conn.food.findAll(

      );


      //exam join 3 table
      // let data = await conn.restaurant.findAll({
      //   include: [
      //     {
      //       model: conn.like_res,
      //       as: "like_res",
      //       include: [
      //         {
      //           model: conn.users,
      //           as: "user"
      //         }
      //       ]
      //     }
      //   ]
      // }
        
      // );
      res.send(data);
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  export {
getFood
  }