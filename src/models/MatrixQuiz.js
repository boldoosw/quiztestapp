import mongoose, { Schema } from "mongoose";

const matrixQuizSchema = new Schema(
  {
    climov_items: {
      type: String,
    },
    holland_items: {
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

const MatrixQuiz =
  mongoose.models.MatrixQuiz || mongoose.model("MatrixQuiz", matrixQuizSchema);

export default MatrixQuiz;
