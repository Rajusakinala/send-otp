const express = require("express");
// const cors = require("cors");
const app = express();
app.use(express.json());
// const SendOtp = require("sendotp");
// const sendOtp = new SendOtp("MSG91");
// sendOtp.send("9676639383", "PRIIND", "1234", function (error, data) {
//   console.log(error);
//   console.log(data);
// });

// const fast2sms = require("fast-two-sms");

// var options = {
//   authorization:
//     "VNn5zAsq9dWmKYivUcrlL46EJtpyu8X7wFe0ZM1xGfICDOoQB3QiYZtUbkIvS9hBOAGRDmXfpE3MJ4FV",
//   message: "Hai",
//   numbers: ["919676639383", "+91 9676639383", "+919676639383", "91 9676639383"],
// };
// fast2sms.sendMessage(options);

// springedge

var springedge = require("springedge");

var params = {
  apikey: "6on957rb36978j0rl148a6j226v03jmr", // API Key
  sender: "SEDEMO", // Sender Name
  to: ["9676639383"],
  message: "Hello, This is a test message from spring edge",
  format: "json",
};

springedge.messages.send(params, 5000, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});

// const otpGenerator = require("otp-generator");

// let a = otpGenerator.generate(6, {
//   lowerCaseAlphabets: false,
//   upperCaseAlphabets: false,
//   specialChars: false,
// });
// console.log("unique Otp : ", a);
// app.use(cors());
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// mongoose.set("strictQuery", true);
// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
//   console.log("DB Connected");
// });

// const authRoute = require("./routes/auth");
// app.use("/api/v1/user", authRoute);

// const postsRoute = require("./routes/posts");
// app.use("/api/v1/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Home route");
});

app.listen(6900, () => console.log("server running on port 6900"));
