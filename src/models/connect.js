import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node38_food","root","1234",{
    host:"localhost",
    port:3307,
    dialect:"mysql",
    
})

export default sequelize;

// pull đối tượng về
// npx sequelize-auto -h localhost -d node38_food -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm