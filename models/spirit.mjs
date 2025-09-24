import mongoose from "mongoose";

const spiritSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    entityType: {
        type: String,
        enum: ["Boggart", "Dementor", "Ghost", "Poltergeist"],
        required: true
    },
    abilities: [{ type: String }], // e.g. ["Soul-sucking", "Fear-shaping"]
    hauntingLocation: { type: String }, // e.g. "Hogwarts", "Azkaban"
    description: { type: String },
}, { timestamps: true });

const Spirit = mongoose.model("Spirit", spiritSchema);
export default Spirit;