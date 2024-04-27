import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: [true, "Please enter correct short id "],
      unique: [true, "short id already exists"],
    },
    redirectUrl: {
      type: String,
      required: [true, "Not correct Url"],
    },
    visitUrlHistory: [
      {
        timestamps: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);
