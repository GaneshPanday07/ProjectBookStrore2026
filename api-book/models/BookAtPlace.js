const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookAtPlaceSchema = new Schema ({
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    pinCode: { type: String, },
    isAvilable: { type: Boolean, default: false },
}, { timestamps: true})

module.exports = mongoose.model('BookAtPlace', BookAtPlaceSchema)