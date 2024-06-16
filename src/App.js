import "./App.css";
import React, { createContext, useContext, useState,useEffect } from "react";
import Home from "./screen/Home";
import Header from "./components/Header";
import AddQuestion from "./screen/AddQuestion";
import Error from "./components/Error";
import MyStack from "./screen/MyStack";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Explore from "./screen/Explore";
import Footer from "./components/Footer";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import EditDetails from "./screen/EditDetails";
import ViewQuestion from "./screen/ViewQuestion";
import CodeLive from "./screen/CodeLive";
import PublicQuestion from "./screen/PublicQuestion";
const CurrentUserContext = createContext();

function App() {
  const [currentUsername, setCurrentUsername] = useState(() => {
    return localStorage.getItem("currentUsername") || "";
  });

  useEffect(() => {
    localStorage.setItem("currentUsername", currentUsername);
  }, [currentUsername]);


  return (
    <React.Fragment>
      <CurrentUserContext.Provider value={{ currentUsername, setCurrentUsername }}>
        <Router>
          <MainContent />
        </Router>
      </CurrentUserContext.Provider>
      <Footer />
    </React.Fragment>
  );
}

const MainContent = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/"];

  return (
    <React.Fragment>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/:currentUsername/home" element={<Home />} />
        <Route path="/:currentUsername/uploadQuestion" element={<AddQuestion />} />
        <Route path="/:currentUsername/explore" element={<Explore />} />
        <Route path="/:currentUsername/mystack" element={<MyStack />} />
        <Route path="/:currentUsername/edit-profile" element={<EditDetails />} />
        <Route path="/:currentUsername/viewQuestion/:questionId" element={<ViewQuestion></ViewQuestion>} />
         <Route path="/:currentUsername/codelive" element={ <CodeLive/>} />
         <Route path="/question/:id" element={<PublicQuestion />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
 
  );
};

export default App;
export { CurrentUserContext };
