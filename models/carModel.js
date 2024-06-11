import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    rate: Number,
    location: String,
    availability: Boolean,
    type: String,
    inclusions: String,
    exclusions: String,
    image_url: String,
    description: String,
    
});

const Car = mongoose.model('Car', carSchema);

export default Car;
