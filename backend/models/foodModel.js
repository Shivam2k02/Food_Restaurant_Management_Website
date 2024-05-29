import mongoose from "mongoose";

// food models properties
const foodSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
});

// Create the model from the schema
const Food = mongoose.model.Food || mongoose.model('Food', foodSchema);

export default Food;