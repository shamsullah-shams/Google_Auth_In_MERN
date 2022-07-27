import { DataTypes } from "sequelize";
import sequelize from "../util/dbConnection.js";


const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_verified: {
        type: DataTypes.BOOLEAN,
    },
});


export default User;