import "./App.css";
import React, { createContext, useContext, useState } from "react";
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

const CurrentUserContext = createContext();

function App() {
  const [currentUsername, setCurrentUsername] = useState("");

  return (
    <React.Fragment>
<<<<<<< HEAD
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
=======
      <CurrentUserContext.Provider value={{ currentUsername, setCurrentUsername }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/:currentUsername/home" element={<Home />} />
            <Route path="/:currentUsername/uploadQuestion" element={<AddQuestion />} />
            <Route path="/:currentUsername/explore" element={<Explore />} />
            <Route path="/:currentUsername/mystack" element={<MyStack />} />
            <Route path="/:currentUsername/edit-profile" element={<EditDetails />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </CurrentUserContext.Provider>
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
      <Footer />
    </React.Fragment>
  );
}

export default App;
export { CurrentUserContext };
