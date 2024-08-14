const mongoose = require('mongoose');

const InventoryItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);
