import express from "express";
import Spirit from "../models/spirit.mjs";

const router = express.Router();

// Get spirits by entity type (e.g., "Ghost", "Dementor")
router.get("/type/:entity", async (req, res) => {
    try {
        const result = await Spirit.find({ entityType: req.params.entity });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
});

// Get spirits haunting a specific location
router.get("/haunt/:loc", async (req, res) => {
    try {
        const result = await Spirit.find({ hauntingLocation: req.params.loc });
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
            const newSpirit = await Spirit.create(req.body);
            res.json(newSpirit);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    .get(async (req, res) => {
        try {
            const allSpirits = await Spirit.find({});
            res.json(allSpirits);
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
            const updatedSpirit = await Spirit.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedSpirit);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedSpirit = await Spirit.findByIdAndDelete(req.params.id);
            res.json(deletedSpirit);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    });

export default router;