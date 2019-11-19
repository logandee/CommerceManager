const Product = require('../models/models');
const path = require('path');

module.exports = {
    getAll: (req,res) => {
        Product.find()
            .then(data => res.json({message: "success", result: data}))
            .catch(err => res.json({message: "error", result: err}))
    },
    getOne: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then(data => res.json({message: "success", result: data}))
            .catch(err => res.json({message: "error", result: err}))
    },
    createProduct: (req,res) => {
        Product.create(req.body)
            .then(data => res.json({message: "success", result: data}))
            .catch(err => res.json({message: "error", result: err}))
    },
    editProduct: (req,res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json({message: "success", result: data}))
            .catch(err => res.json({message: "error", result: err}))
    },
    deleteProduct: (req,res) => {
        Product.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", result: data}))
            .catch(err => res.json({message: "error", result: err}))
    }
}