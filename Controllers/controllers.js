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

/**
 * Get All Info
 */
exports.getAllInfo = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await Person.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (Work !== "Maneger") {
      return res.status(400).json({
        success: false,
        message:
          "You are invalid person to gett all information about chef and waiter",
      });
    }

    const data = await Person.find({});

    if (allData.length === 0) {
      return res.status(200).josn({
        success: true,
        message: "Collection is empty",
        data,
      });
    }

    return res.status(200).josn({
      success: true,
      message: "Collection fetched successfully",
      data,
    });
  } catch (error) {
    console.error("An error occurred while gettiong info for all");
    return res.status(500).json({
      success: false,
      message: "An error while getting data",
    });
  }
};
