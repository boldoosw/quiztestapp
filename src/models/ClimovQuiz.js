import mongoose, { Schema } from "mongoose";

const climovQuizSchema = new Schema(
  {
    climovquiz_items: {
      type: String,
    },
    top_items: {
      type: String,
      required: false,
    },
    uid: {
      type: String,
      required: false,
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
