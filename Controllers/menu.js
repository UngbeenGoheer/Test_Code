const { Menu } = require("../Models/menu");

/**menuInfo */
exports.menuinfo = async (req, res) => {
  try {
    const data = req.body;
    const newmenu = new Menu(data);
    const savedmenu = await newmenu.save();

    return res.status(200).json(savedmenu);
  } catch (error) {
    error;
  }
};
exports.findMenu = async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("fetched data");
    return res.status(200).json(data);
  } catch (error) {
    error;
  }
};
