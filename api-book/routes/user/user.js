const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/user/UserController')

router.post('/create/user', (req, res) => {
    UserController.addUser(req, res)
})
module.exports = router