import mongoose, { Schema } from "mongoose";

const hollandQuizSchema = new Schema(
  {
    hollandquiz_items: {
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

const HollandQuiz =
  mongoose.models.HollandQuiz ||
  mongoose.model("HollandQuiz", hollandQuizSchema);

export default HollandQuiz;
