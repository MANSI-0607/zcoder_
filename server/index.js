const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
const SignUpRouter = require("./routes/SignUp");
const LoginRouter = require("./routes/Login");
<<<<<<< HEAD
=======
const UploadedQuestionRouter = require("./routes/UploadQuestion");
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
const EditProfileRouter = require("./routes/EditProfile");
const { connectToMongoDB } = require("./connect");

// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/SignUp")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON data
app.use(express.json());

// Enable CORS for all routes
// const corsOptions = {
//   origin: 'http://localhost:3000', // Replace with your frontend's origin
//   optionsSuccessStatus: 200 // Some legacy browsers choke on 204
// };

app.use(cors());
app.use(bodyParser.json());
app.use("/signUp", SignUpRouter);
app.use("/login", LoginRouter);
app.use("/:userName/edit-profile", EditProfileRouter);
<<<<<<< HEAD

=======
app.use("/", UploadedQuestionRouter);
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15

app.listen(PORT, () => {
  console.log(`Server is started at PORT:${PORT}`);
});
