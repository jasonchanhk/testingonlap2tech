const express = require('express')
const router = express.Router();
const Dish = require('../models/dishes')

router.get('/', async (req, res) => {
    try{
        const dishes = await Dish.all
        res.json({dishes})
    }catch(err){
        res.status(500).json({err})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const dish = await Dish.findById(req.params.id)
        res.json(dish)
    }catch(err){
        res.status(404).json({err})
    }
})

router.post('/', async (req, res) => {
    try{
        const dish = await Dish.create(req.body)
        res.json(dish)
    }catch(err){
        res.status(404).json({err})
    }
})

router.patch('/:id/add', async (req, res) => {
    try{
        const dish = await Dish.findById(req.params.id)
        const updatedDish = await dish.update('add')
        res.json(updatedDish)
    }catch(err){
        res.status(500).json({err})
    }
})

router.patch('/:id/minus', async (req, res) => {
    try{
        const dish = await Dish.findById(req.params.id)
        const updatedDish = await dish.update('minus')
        res.json(updatedDish)
    }catch(err){
        res.status(500).json({err})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const dish = await Dish.findById(req.params.id)
        await dish.destroy()
        res.status(204).json('Cat deleted')
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router
