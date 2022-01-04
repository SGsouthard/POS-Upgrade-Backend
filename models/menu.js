const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;