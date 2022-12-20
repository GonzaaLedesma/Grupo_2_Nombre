const mainController = {
    index: async (req, res) => {
      res.render("home", { titlePage: "- Home" })
  }
}
  
module.exports = mainController; 