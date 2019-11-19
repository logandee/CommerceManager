const mongoose = require('mongoose'),
Schema = mongoose.Schema,
autoIncrement = require('mongoose-auto-increment');

const config = require('../mongoose/connection');
const connection = mongoose.createConnection(config.connectionString, config.params);
mongoose.connect(config.connectionString, config.params);


autoIncrement.initialize(connection);

const ProductSchema = new Schema({
    name: {type: String, required: true, minlength: 3},
    qty: {type: Number, required: true, min: 0, max: 1000},
    price: {type: Number, required: true, min: 0, max: 1000}

}, {timestamps: true});

ProductSchema.plugin(autoIncrement.plugin, 'product');
module.exports = mongoose.model('product', ProductSchema);