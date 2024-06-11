import express from 'express';
import Car from '../models/carModel.js';
const router = express.Router();

// Add a new car
router.post('/', async (req, res) => {
    const carData = req.body;
    const newCar = new Car(carData);
    try {
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get cars by type
router.get('/:type', async (req, res) => {
    const { type } = req.params;
    try {
        const cars = await Car.find({ type });
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a car by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCar = await Car.findByIdAndDelete(id);
        if (!deletedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        await car.remove();
        res.json({ message: 'Car deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;