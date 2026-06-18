import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    technologies: {
      type: [String],
      required: true,
      validate: [(value) => value.length > 0, "At least one technology is required"]
    },
    github: {
      type: String,
      required: true
    },
    liveDemo: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
