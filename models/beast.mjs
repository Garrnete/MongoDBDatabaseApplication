import mongoose from "mongoose";

const beastSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  speciesType: { type: String, default: "Beast" },
  dangerLevel: { type: Number, min: 1, max: 10, required: true },
  habitat: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

// Create an index for faster querying by dangerLevel + habitat
beastSchema.index({ dangerLevel: -1, habitat: 1 });

const Beast = mongoose.model("Beast", beastSchema);
export default Beast;








export default mongoose.model('Avian', avianSchema);


// Create an index for faster querying
mammalSchema.index({ species: 1 });
mammalSchema.index({ habitat: 1 });

// Create status methods to get Avg age of all animals in the adoption Center
birdSchema.statics.avgAge = function  (){

}

export default mongoose.model('Birds', avianSchema);