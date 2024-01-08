import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

//like - unlike
const createLike = async (req, res) => {

  try {
    let { user_id, res_id } = req.body;
  
    const like = await conn.like_res.findAll({
      where: {
        user_id,
        res_id,
      },
    });
  
    if (like.length === 0) {
      let day = new Date();
      let strDay = day.toISOString();
      let newData = {
        user_id,
        res_id,
        date_like: strDay,
      };
      await conn.like_res.create(newData);
      return res.send("You just liked");
    } else {
    
      await conn.like_res.destroy({
        where: {
          user_id,
          res_id,
        },
      });
      return res.send("You just unLiked");
    }
  } catch (error) {
    res.send(`Backend error: ${error}`);
  }
};
//lấy ds like theo nhà hàng
const getLikeListByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let data = await conn.like_res.findAll({
      where: {
        res_id,
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
// lấy ds like theo user
const getLikeListByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await conn.like_res.findAll({
      where: {
        user_id,
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
// lấy ds đánh giá theo nhà hàng
const getRateListByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let data = await conn.rate_res.findAll({
      where: {
        res_id,
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
// lấy ds đánh giá theo user
const getRateListByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await conn.rate_res.findAll({
      where: {
        user_id,
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};

// đánh giá nhà hàng
const createRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let day = new Date();
    let strDay = day.toISOString();
    let newData = {
      user_id,
      res_id,
      amount,
      date_rate: strDay,
    };
    await conn.rate_res.create(newData);
    res.send("create rate successfully");
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
//user đặt món
const createOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let newData = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    await conn.order_food.create(newData);
    res.send("create video successfully");
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
export {
  createOrder,
  getLikeListByUser,
  getRateListByUser,
  createRate,
  getRateListByRes,
  getLikeListByRes,
  createLike,
};
