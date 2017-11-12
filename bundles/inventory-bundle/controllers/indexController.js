const data = require('../models/inv-data.json');

exports.view_inventory_by_type = (req, res) => {
    const drinkType = data.drinkType;
    res.status(200).json({ drinkType });
};

exports.view_inventory_by_brand = (req, res) => {
    const drinkBrand = data.drinkBrand;
    res.status(200).json({ drinkBrand });
};