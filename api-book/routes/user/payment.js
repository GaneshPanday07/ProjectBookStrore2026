const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/User/paymentController')
router.post('/create-order', (req, res) => {
    paymentController.makePayment(req, res);
})
router.post('/verify-payment', (req, res)=> {
    paymentController.verifyPayment(req, res)
})
router.post('/my/orders', (req, res)=> {
    paymentController.getMyOrders(req, res)
});
module.exports = router;