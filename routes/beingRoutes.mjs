import express from "express";
import Being from "../models/being.mjs";

const router = express.Router();

// Get beings by affiliation (e.g., "Gringotts", "Hogwarts")
router.get("/affiliation/:aff", async (req, res) => {
    try {
        const result = await Being.find({ affiliation: req.params.aff });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
});

// Search beings by ability
router.get("/ability/:skill", async (req, res) => {
    try {
        const result = await Being.find({ abilities: req.params.skill });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
});

// Create & Read all
router
    .route("/")
    .post(async (req, res) => {
        try {
            const newBeing = await Being.create(req.body);
            res.json(newBeing);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    .get(async (req, res) => {
        try {
            const allBeings = await Being.find({});
            res.json(allBeings);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    });

// Update & Delete
router
    .route("/:id")
    .put(async (req, res) => {
        try {
            const updatedBeing = await Being.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedBeing);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedBeing = await Being.findByIdAndDelete(req.params.id);
            res.json(deletedBeing);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    });

export default router;