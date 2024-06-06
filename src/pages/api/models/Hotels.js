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
    to: {
      type: String,
    },
    from: {
      type: String,
    },
    members: {
      type: String,
    },
  },
  { timestamps: true }
);

const Hotels = mongoose.models.Hotels || mongoose.model("Hotels", tourSchema);
export default Hotels;
