  
const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

// connect to database
if (process.env.CLEARDB_DATABASE_URL) {
    sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql"
    });
}

module.exports = sequelize;