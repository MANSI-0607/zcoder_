const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

const SignUpRouter = require("./routes/SignUp");
const LoginRouter = require("./routes/Login");
const UploadedQuestionRouter = require("./routes/UploadQuestion");
const EditProfileRouter = require("./routes/EditProfile");
const GetProfileRouter = require("./routes/Profile");
const GetRecentQuestionRouter = require("./routes/FetchRecentQuestions");
const GetMyStackRouter=require("./routes/MyStack")
const UpdateQuestion=require("./routes/UpdateQuestion")
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
app.use(cors());
app.use(bodyParser.json());

app.use("/signUp", SignUpRouter);
app.use("/login", LoginRouter);
app.use("/:userName/edit-profile", EditProfileRouter);
app.use("/home", GetProfileRouter);
app.use("/", UploadedQuestionRouter);
app.use("/getRecentQuestion", GetRecentQuestionRouter);
app.use("/:username/mystack", GetMyStackRouter);
app.use("/updateQuestion", UpdateQuestion);

app.listen(PORT, () => {
  console.log(`Server is started at PORT:${PORT}`);
});
