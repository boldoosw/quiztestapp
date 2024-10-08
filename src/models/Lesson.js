import mongoose, { Schema } from "mongoose";

const lessonSchema = new Schema(
  {
    checkbox_items: {
      type: String,
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

const Lesson = mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);

export default Lesson;
