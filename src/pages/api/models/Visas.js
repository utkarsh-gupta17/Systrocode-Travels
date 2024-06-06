import mongoose, { Schema } from "mongoose";
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@travel.qoo4x1p.mongodb.net/travel`
);
mongoose.Promise = global.Promise;

const tourSchema = new Schema(
  {
    destination: {
      type: String,
    },
    date: {
      type: String,
    },
    category: {
      type: String,
    },
    members: {
      type: String,
    },
  },
  { timestamps: true }
);

const Visas = mongoose.models.Visas || mongoose.model("Visas", tourSchema);
export default Visas;
