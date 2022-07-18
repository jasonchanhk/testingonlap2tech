const express = require('express')
const router = express.Router();

const { verifyToken } = require('../middleware/auth')

const User = require('../models/users')

router.get('/', verifyToken, async (req, res) => {
    try {
        const users = await User.all
        res.json({ users })
    } catch (err) {
        res.status(500).json({ err })
    }
})

module.exports = router
