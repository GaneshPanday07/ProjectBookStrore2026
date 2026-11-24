let Transaction = require("../models/Transaction");

const getTransactions = async(req, res) => {
    try{
        let transactions = await Transaction.find({});
        res.status(200).send({ data: transactions})
    } catch(err) {
        console.log(err)
        res.status(400).send({ message: "Something went wrong" });
    }
}

const deleteTransaction = async() => {
    try{
        let id = req.params.id;
        await Transaction.findByIdAndDelete({id})
        res.status(200).send({ data: 'delete Transaction successfully...'})
    } catch(err) {
        console.log(err)
        res.status(400).send({ message: 'Delete Transaction failed..' })
    }
}

module.exports = {
  getTransactions,
  deleteTransaction
};