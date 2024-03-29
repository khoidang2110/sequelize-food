import express from "express";

import foodRoutes from "./foodRoutes.js";
import userRoutes from "./userRoutes.js";

const rootRoutes = express.Router();
rootRoutes.use('/food',foodRoutes);
rootRoutes.use('/user',userRoutes);
export default rootRoutes;

