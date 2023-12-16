import { Types } from "mongoose";
export interface vehicleModel {
  _id: Types.ObjectId;
  vid:number;
  brand: string;
  model: string;
  color: string;
  fuelType: string;
  mileage: string;
  transmission: string;
  condition: string;
  engineCapacity: string;
  price: number;
  status: string;
  address: string;
  contact: number;
  frontImg: string;
  backImg: string;
}
