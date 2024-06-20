const express = require("express");
const cors = require("cors");
const { connectToMongoDB } = require("./connect");

// Import routers
const SignUpRouter = require("./routes/SignUp");
const LoginRouter = require("./routes/Login");
const UploadedQuestionRouter = require("./routes/UploadQuestion");
const EditProfileRouter = require("./routes/EditProfile");
const GetProfileRouter = require("./routes/Profile");
const GetRecentQuestionRouter = require("./routes/FetchRecentQuestions");
const GetMyStackRouter = require("./routes/MyStack");
const UpdateQuestionRouter = require("./routes/UpdateQuestion");
const GetExploreRouter = require("./routes/Explore");
const CodeLiveRouter = require("./routes/CodeLive");

const app = express();
const PORT = 8000;

// MongoDB connection setup
const mongoURI = "mongodb+srv://pabitraKumar:Pabitra@cluster0.bqxhvj3.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0";
connectToMongoDB(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cors({
  origin: 'https://your-frontend-domain.com', // Replace with your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods if needed
  credentials: true, // Allow cookies to be sent with requests
}));

// Routes
app.use("/signUp", SignUpRouter);
app.use("/login", LoginRouter);
app.use("/:userName/edit-profile", EditProfileRouter);
app.use("/home", GetProfileRouter);
app.use("/", UploadedQuestionRouter);
app.use("/getRecentQuestion", GetRecentQuestionRouter);
app.use("/:username/mystack", GetMyStackRouter);
app.use("/updateQuestion", UpdateQuestionRouter);
app.use("/:username/explore", GetExploreRouter);
app.use("/run-cpp", CodeLiveRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is started at PORT:${PORT}`);
});
