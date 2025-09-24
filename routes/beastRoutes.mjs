import express from "express";
import Beast from "../models/beast.mjs";

const router = express.Router();

router.post("/test-invalid", async (req, res) => {
    try {
        // test invalid: dangerLevel is missing (required)
        const invalid = await Beast.create({ name: "InvalidBeast", habitat: "Nowhere" });
        res.json(invalid);
    } catch (err) {
        // Send back validation error message (shows DB-side validation works)
        res.status(400).json({ msg: "Validation failed", error: err.message });
    }
});

// Get beasts by habitat
router.get("/habitat/:hab", async (req, res) => {
    try {
        const result = await Beast.find({ habitat: req.params.hab });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
});

// Get beasts by danger level (greater than or equal to)
router.get("/danger/:level", async (req, res) => {
    try {
        const result = await Beast.find({ dangerLevel: { $gte: req.params.level } });
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
            const newBeast = await Beast.create(req.body);
            res.json(newBeast);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    .get(async (req, res) => {
        try {
            const allBeasts = await Beast.find({});
            res.json(allBeasts);
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
            const updatedBeast = await Beast.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedBeast);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedBeast = await Beast.findByIdAndDelete(req.params.id);
            res.json(deletedBeast);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    });

export default router;