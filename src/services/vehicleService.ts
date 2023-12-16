/* eslint-disable @typescript-eslint/no-explicit-any */
import vehicleModelData from '../models/vehicle.model';

export const getAllVehicleService = async (): Promise<object | string> => {
  try {
    const vehicleData = await vehicleModelData.find();
    return vehicleData;
  } catch (error) {
    return 'Error :' + error;
  }
};
export const getVehicleByStatusService = async (
  currntStatus: string
): Promise<object | string> => {
  try {
    const vehicleData = await vehicleModelData.find({ status: currntStatus });
    return vehicleData;
  } catch (error) {
    return 'Error :' + error;
  }
};

export const getVehicleByNameService = async (
  currntName: string
): Promise<object | string> => {
  try {
    const vehicleData = await vehicleModelData.find({ model: currntName });
    return vehicleData;
  } catch (error) {
    return 'Error :' + error;
  }
};

export const saveVehicleService = async (
  vehicleData: any
): Promise<object | string> => {
  try {
    // console.log(frontImgOfVehicle);
    // console.log(backImgOfVehicle);
    console.log('vvv1- ', vehicleData);
    const highestVehicleId = await vehicleModelData
      .findOne()
      .sort('-vid')
      .select('vid')
      .lean();

    const newVid = highestVehicleId ? highestVehicleId.vid + 1 : 1;

    const vehicle = new vehicleModelData({
      vid: newVid,
      brand: vehicleData.brand,
      model: vehicleData.model,
      color: vehicleData.color,
      fuelType: vehicleData.fuelType,
      mileage: vehicleData.mileage,
      transmission: vehicleData.transmission,
      condition: vehicleData.condition,
      engineCapacity: vehicleData.engineCapacity,
      price: vehicleData.price,
      status: vehicleData.status,
      address: vehicleData.address,
      contact: vehicleData.contact,
      imgCollection: vehicleData.imgCollection,
      // frontImg: vehicleData.frontImg,
      // backImg: vehicleData.backImg,
    });

    const saveResponse = await vehicle.save();
    return { message: 'Vehicle added successfully !', saveResponse };
  } catch (error) {
    return 'Error s :' + error;
  }
};

export const updateVehicleService = async (
  vehicleData: any
): Promise<object | string> => {
  try {
    const { _id, ...updateData } = vehicleData;
    const updateResponse = await vehicleModelData.findOneAndUpdate(
      { _id },
      updateData
    );
    return { message: 'Vehicle Update successfuly !', updateResponse };
  } catch (error) {
    return 'error :' + error;
  }
};

export const deleteVehicleService = async (
  data: string
): Promise<object | string> => {
  try {
    const deleteResponse = await vehicleModelData.findByIdAndDelete(data);
    return { message: 'Vehicle Deleted successfuly !', deleteResponse };
  } catch (error) {
    return 'error :' + error;
  }
};
