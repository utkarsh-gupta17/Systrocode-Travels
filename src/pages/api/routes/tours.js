import Tours from "../models/Tours";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);
    console.log(formData.formData);
    const tour = new Tours(formData.formData);
    const savedTour = await tour.save();
    res.status(201).send(savedTour);
  }
  if (req.method === "GET") {
    const toursData = await Tours.find();
    res.status(201).send(toursData);
  }
}
