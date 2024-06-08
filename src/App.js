import "./App.css";
import React from "react";
import Home from "./screen/Home";
import Header from "./components/Header";
import AddQuestion from "./screen/AddQuestion";
import Error from "./components/Error";
import MyStack from "./screen/MyStack";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./screen/Explore";
import Footer from "./components/Footer";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import EditDetails from "./screen/EditDetails";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/:userName/home" element={<Home />} />
          <Route path="/addquestion" element={<AddQuestion />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/mystack" element={<MyStack />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route path="/edit-profile" element={<EditDetails />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
export default App;
