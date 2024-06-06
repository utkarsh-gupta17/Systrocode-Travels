import Hotels from "../models/Hotels";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);
    console.log(formData.formData);
    const hotel = new Hotels(formData.formData);
    const savedHotel = await hotel.save();
    res.status(201).send(savedHotel);
  }
  if (req.method === "GET") {
    const hotelsData = await Hotels.find();
    res.status(201).send(hotelsData);
  }
}
