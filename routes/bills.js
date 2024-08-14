const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');
const InventoryItem = require('../models/InventoryItem');

// Create a new bill for a sale transaction
router.post('/', async (req, res) => {
  const { items } = req.body;

  try {
    let totalAmount = 0;

    // Update inventory and calculate total amount
    for (const item of items) {
      const inventoryItem = await InventoryItem.findOne({ item_id: item.item_id });
      if (!inventoryItem) {
        return res.status(404).json({ message: `Item with id ${item.item_id} not found in inventory` });
      }

      if (inventoryItem.quantity < item.quantity) {
        return res.status(400).json({ message: `Not enough quantity for item ${inventoryItem.name}` });
      }

      inventoryItem.quantity -= item.quantity;
      await inventoryItem.save();

      totalAmount += item.quantity * inventoryItem.price;
    }

    const newBill = new Bill({
      bill_id: req.body.bill_id,
      items,
      total_amount: totalAmount
    });

    await newBill.save();
    res.status(201).json(newBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retrieve all bills
router.get('/', async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve details of a specific bill
router.get('/:bill_id', async (req, res) => {
  try {
    const bill = await Bill.findOne({ bill_id: req.params.bill_id });
    if (!bill) return res.status(404).json({ message: 'Bill not found' });
    res.json(bill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
