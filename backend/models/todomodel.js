const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "ongoing", "done"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
