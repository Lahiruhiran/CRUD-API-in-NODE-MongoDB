const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const Product = require('../../moels/Product')

// @routes GET api/post
// @desc Get all Products
router.get('/',async (req, res) =>{
try {
    const produt = await Product.find();
    res.status(200).json(produt);
} catch (err) {
    res.status(400).json({msg: err})
}
});

// @routes GET api/post/id
// @desc Get all Products
router.get('/:id',async (req, res) =>{
    try {
        const produt = await Product.findById(req.params.id);
        res.status(200).json(produt);
    } catch (err) {
        res.status(400).json({msg: err})
    }
    });

// @routes POST api/post
// @desc Create   products

router.post('/', async (req,res)=>{
    const newProduct  = new Product(req.body);

    try {
        const product = await newProduct.save()
     if(!product) throw Error("Something went wrong when save Product");
     res.status(200).json(product);   
    } catch (err) {
        res.status(400).json({msg: err})
    }

});

// @routes DELETE api/post/id
// @desc Delete an Products
router.delete('/:id',async (req, res) =>{
    try {
        const produt = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true});
    } catch (err) {
        res.status(400).json({msg: err})
    }
    });

// @routes UPDATE api/post/id
// @desc Update an Products
router.patch('/:id',async (req, res) =>{
    try {
        const produt = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({success:true});
    } catch (err) {
        res.status(400).json({msg: err})
    }
    });
module.exports = router;