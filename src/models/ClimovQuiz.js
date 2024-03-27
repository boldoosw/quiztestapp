import mongoose from "mongoose";

const { Schema } = mongoose;

const climovQuizSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    people_count: {
      type: Number,
      required: false,
    },
    technical_count: {
      type: Number,
      required: false,
    },
    culture_count: {
      type: Number,
      required: false,
    },
    character_count: {
      type: Number,
      required: false,
    },
    ecology_count: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ClimovQuiz ||
  mongoose.model("ClimovQuiz", climovQuizSchema);
