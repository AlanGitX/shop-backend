const mongoose = require('mongoose');

const BillItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

const BillSchema = new mongoose.Schema({
  bill_id: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  total_amount: { type: Number, required: true },
  items: [BillItemSchema]
});

module.exports = mongoose.model('Bill', BillSchema);
