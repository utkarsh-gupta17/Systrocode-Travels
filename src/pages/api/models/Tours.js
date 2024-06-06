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
    budget: {
      type: String,
    },
  },
  { timestamps: true }
);

const Tours = mongoose.models.Tours || mongoose.model("Tours", tourSchema);
export default Tours;
