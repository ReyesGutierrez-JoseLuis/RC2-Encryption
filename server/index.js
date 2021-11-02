require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/text", require("./routes/words"));

//Mongo connection
const URI = process.env.MONGODB_URL;
mongoose.connect(
    URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;
        console.log(`Connected to MongoDB`);
    }
);
/*
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

/*
const crypto = require('crypto');
algo = 'rc2-cbc'
key = '1234567890'
iv = 'someInit'

keyBuffer = new Buffer(key)
ivBuffer = new Buffer(iv)

cipher = crypto.createCipheriv(algo, keyBuffer, ivBuffer)
textBuffer = new Buffer('HelloWorld')
encrypted = cipher.update(textBuffer)
encryptedFinal = cipher.final()
encryptedText = encrypted.toString('base64') + encryptedFinal.toString('base64')

console.log (encryptedText)
*/

