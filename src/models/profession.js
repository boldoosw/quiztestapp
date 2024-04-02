import mongoose, { Schema } from "mongoose";

const professionSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Profession =
  mongoose.models.Profession || mongoose.model("Profession", professionSchema);

export default Profession;
