import Visas from "../models/Visas";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);
    // console.log(formData.formData);
    const visa = new Visas(formData.formData);
    // console.log(visa);
    const savedVisa = await visa.save();
    res.status(201).send(savedVisa);
  }
  if (req.method === "GET") {
    const visasData = await Visas.find();
    res.status(201).send(visasData);
  }
}
