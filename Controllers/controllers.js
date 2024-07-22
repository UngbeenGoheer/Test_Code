const { Person } = require("../Models/models");

/**PersonInfo */
exports.personinfo = async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();

    return res.status(200).json(savedPerson);
  } catch (error) {
    error;
  }
};
exports.findinfo = async (req, res) => {
  try {
    const data = await Person.find();
    console.log("fetched data");
    return res.status(200).json(data);
  } catch (error) {
    error;
  }
};
