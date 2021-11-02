const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
    {
        text: {
            required: true,
            trim: true,
            type: String,
        }
    },
    { timestamps: true }
);

const Text = mongoose.model("Project", textSchema);

module.exports = Text;
