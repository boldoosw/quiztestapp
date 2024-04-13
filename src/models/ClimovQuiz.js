import mongoose, { Schema } from "mongoose";

const climovQuizSchema = new Schema(
  {
    climovquiz_items: {
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

const ClimovQuiz =
  mongoose.models.ClimovQuiz || mongoose.model("ClimovQuiz", climovQuizSchema);

export default ClimovQuiz;
