const Razorpay = require('razorpay')
const Transaction = require('../../models/Transaction')

const makePayment = async(req, res) => {
    try{
        const razorpay = new Razorpay({
          key_id: "rzp_test_TqS7RUAEospGjt",
          key_secret: "g6RRbKwC1HVvrkFgofeXFp2F",
        });
        console.log(req.body)
        let transaction = new Transaction(req.body)
        const options = {
            amount : req.body * 100,
            currency: 'INR',
            receipt: req.body.firstName
        }
        const order = await razorpay.orders.create(options);
        console.log(order)
        transaction.transactionId = order.id
        res.status(200).json(order);
        await transaction.save();
    } catch(err) {
        console.log(err)
        res.status(400).send(err);
    }
}

module.exports = {
  makePayment,
};