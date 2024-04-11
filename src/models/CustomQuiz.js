import mongoose, { Schema } from "mongoose";

const customQuizSchema = new Schema(
  {
    customquiz_items: {
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

const CustomQuiz =
  mongoose.models.CustomQuiz || mongoose.model("CustomQuiz", customQuizSchema);

export default CustomQuiz;
