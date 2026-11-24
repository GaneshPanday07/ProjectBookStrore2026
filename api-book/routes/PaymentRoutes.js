const express = require("express")
const router = express.Router()
const paymentController = require('../controllers/PaymentController')

router.get('/transactions', (req, res) => {
    paymentController.getTransactions(req, res)
})
router.delete('/delete/transaction/:id', (req, res) => {
    paymentController.deleteTransaction(req, res);
})
module.exports = router