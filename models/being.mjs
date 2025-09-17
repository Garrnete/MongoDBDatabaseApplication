import mongoose from "mongoose";

const beingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  speciesType: { type: String, default: "Being" },
  abilities: [{ type: String }], // e.g. ["Banking expertise", "Magical speech"]
  affiliation: { type: String }, // e.g. "Gringotts", "Hogwarts", "Tribes"
  description: { type: String },
}, { timestamps: true });

const Being = mongoose.model("Being", beingSchema);
export default Being;