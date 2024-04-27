import mongoose, { Schema } from "mongoose";

const yesNoSchema = new Schema(
  {
    a_items: {
      type: String,
    },
    b_items: {
      type: String,
    },
    c_items: {
      type: String,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const YesNo = mongoose.models.YesNo || mongoose.model("YesNo", yesNoSchema);

export default YesNo;
