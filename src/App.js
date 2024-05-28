import MainPage from "./components/MainPage";
import "./App.css";
import React from "react";
import Home from "./screen/Home";
import Header from "./components/Header";
function App() {
  return (
    <React.Fragment>
      {/* <MainPage/> */}
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
