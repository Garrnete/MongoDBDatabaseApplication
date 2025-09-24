import mongoose from "mongoose";

const beastSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    speciesType: { type: String, default: "Beast" },
    dangerLevel: { type: Number, min: 1, max: 10, required: true },
    habitat: { type: String, required: true },
    description: { type: String },
}, { timestamps: true });

// Index for performance
beastSchema.index({ dangerLevel: -1, habitat: 1 });

const Beast = mongoose.model("Beast", beastSchema);
export default Beast;