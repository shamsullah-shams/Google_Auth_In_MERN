import express from "express";
import authRoutes from "./routes/auth.js";
import sequelize from "./util/dbConnection.js";
import { config } from "dotenv";
import cors from "cors";

const app = express();

// @@ === parsing json data from request
app.use(express.json());
// @@ === dot env configurationn
config();
// @@ ==== handling cor errors
app.use(cors());
// @@ ==== routes
app.use('/api', authRoutes);

// @@ === Creating tables if not exists
sequelize
    .sync()
    .then(() => {
        app.listen(9000, () => {
            console.log('server is running')
        })
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });
