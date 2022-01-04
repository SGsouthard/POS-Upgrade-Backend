const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const menuSchema = new mongoose.Schema({
    name: String,
    menuItem: Number
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;