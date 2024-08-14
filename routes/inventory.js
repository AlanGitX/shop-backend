const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem');

// Add a new item to the inventory
router.post('/', async (req, res) => {
  try {
    const newItem = new InventoryItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retrieve all items in the inventory
router.get('/', async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve a specific item by ID
router.get('/:item_id', async (req, res) => {
  try {
    const item = await InventoryItem.findOne({ item_id: req.params.item_id });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update details of an item
router.put('/:item_id', async (req, res) => {
  try {
    const item = await InventoryItem.findOneAndUpdate({ item_id: req.params.item_id }, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Remove an item from the inventory
router.delete('/:item_id', async (req, res) => {
  try {
    const item = await InventoryItem.findOneAndDelete({ item_id: req.params.item_id });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
