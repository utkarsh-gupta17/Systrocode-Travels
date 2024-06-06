import Flights from "../models/Flights";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);
    console.log(formData.formData);
    const flight = new Flights(formData.formData);
    const savedFlight = await flight.save();
    res.status(201).send(savedFlight);
  }
  if (req.method === "GET") {
    const flightsData = await Flights.find();
    res.status(201).send(flightsData);
  }
}
