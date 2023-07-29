const mongoose = require('mongoose');

const coolDrinksSchema = new mongoose.Schema({
drinkName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('coolDrinks', coolDrinksSchema);