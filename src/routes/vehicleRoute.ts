import express from 'express';
import multer from 'multer';
//import { uuid } from 'uuidv4';
import {
  deleteVehicle,
  getAllVehicle,
  getVehicleByName,
  getVehicleByStatus,
  saveVehicle,
  updateVehicle,
} from '../controllers/vehicleController';
const DIR =
  'D:/IJSE/Work area/react-native/CARConnect_APP/car_connect_app_BE/src/utils/images';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    // const fileName = file.originalname.toLowerCase().split(' ').join('-');
    // cb(null, uuid() + '-' + fileName);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const route = express.Router();
route.get('/', getAllVehicle);
route.get('/:status', getVehicleByStatus);
route.get('/model/:model', getVehicleByName);
// route.post(
//   "/",
//   upload.single("frontImg"),
//   upload.single("backImg"),
//   saveVehicle
// );
route.post('/', upload.array('imgCollection'), saveVehicle);
route.put('/', updateVehicle);
route.delete('/delete/:id', deleteVehicle);

export default route;
