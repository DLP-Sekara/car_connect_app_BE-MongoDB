/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import {
  deleteVehicleService,
  getAllVehicleService,
  getVehicleByIdService,
  getVehicleByNameService,
  getVehicleByStatusService,
  saveVehicleService,
  updateVehicleService,
} from '../services/vehicleService';

export const getAllVehicle = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const vehicle = await getAllVehicleService();
    console.log(vehicle);
    res.send(vehicle);
  } catch (error) {
    res.status(400);
  }
};
export const getVehicleByStatus = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const vehicle = await getVehicleByStatusService(req.params.status);
    res.send(vehicle);
  } catch (error) {
    res.status(400);
  }
};

export const getVehicleById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const vehicle = await getVehicleByIdService(req.params._id);
    console.log(vehicle);
    res.send(vehicle);
  } catch (error) {
    res.status(400);
  }
};
export const getVehicleByName = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const vehicle = await getVehicleByNameService(req.params.model);
    res.send(vehicle);
  } catch (error) {
    res.status(400);
  }
};
export const saveVehicle = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    //const reqFiles: any = req.files;
    console.log('req-', req.body);
    // const frontImg = reqFiles[0].originalname;
    // const backImg = reqFiles[0].originalname;
    // const vehicle = await saveVehicleService({...req.body, frontImg: frontImg,
    //   backImg: backImg});
    const vehicle = await saveVehicleService(req.body);
    res.send(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
export const updateVehicle = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const vehicle = await updateVehicleService(req.body);
    res.send(vehicle);
  } catch (error) {
    res.status(400);
  }
};
export const deleteVehicle = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const vehicle = await deleteVehicleService(req.params.id);
    res.send(vehicle);
  } catch (error) {
    res.status(400);
  }
};
