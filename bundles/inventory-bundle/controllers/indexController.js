const data = require('../models/inv-data.json');

module.exports = (req, res) => {
    const drinkType = data.drinkType;
    res.status(200).json({ drinkType });
};