import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

import vehicleRoute from "./src/routes/vehicleRoute";
dotenv.config();
const port = process.env.PORT;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:8081",
//   })
// );
app.use("/vehicle", vehicleRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//mongoDb connection 
const url =
  `mongodb+srv://${process.env.MONOGO_db}:${process.env.MONGO_PASSWORD}@cluster1.g7wiqty.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url);
const con=mongoose.connection;
con.on('error', console.error.bind(console, 'MongoDB connection error:'));
con.once('open', () => {
  console.log('MongoDB connected successfully');
});