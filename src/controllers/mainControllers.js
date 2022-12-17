const db = require('../database/models');
const sequelize = db.sequelize;

const mainController = {
    index: (req, res) => {
      res.render("home", { titlePage: "- Home" })
  }
}
  
module.exports = mainController; 