const mainController = {
    index: (req, res) => {
      res.render("home", { titlePage: "- Home" })
  }
}
  
module.exports = mainController; 