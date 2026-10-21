const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/User/paymentController')
router.post('/create-order', (req, res) => {
    paymentController.makePayment(req, res);
})
module.exports = router;