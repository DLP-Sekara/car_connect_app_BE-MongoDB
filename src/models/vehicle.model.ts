import mongoose from 'mongoose';
const vehicleSchema = new mongoose.Schema({
  vid: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  engineCapacity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  arrayOfFilesName: {
    type: Array,
    required: true,
  },
});

const vehicleModelData = mongoose.model('VehicleModelData', vehicleSchema);
export default vehicleModelData;