import express from 'express';
import multer from 'multer';
//import { uuid } from 'uuidv4';
import {
  deleteVehicle,
  getAllVehicle,
  getVehicleById,
  getVehicleByName,
  getVehicleByStatus,
  saveVehicle,
  updateVehicle,
} from '../controllers/vehicleController';
//const DIR =
//  'D:/IJSE/Work area/react-native/CARConnect_APP/car_connect_app_BE/src/utils/images';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'D:/IJSE/Work area/react-native/CARConnect_APP/car_connect_app/src/utils/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const route = express.Router();
route.get('/', getAllVehicle);
route.get('/status/:status', getVehicleByStatus);
route.get('/model/:model', getVehicleByName);
route.get('/id/:_id', getVehicleById);
route.post('/', upload.array('arrayOfFilesName',2), saveVehicle);
route.put('/', updateVehicle);
route.delete('/delete/:id', deleteVehicle);

export default route;
