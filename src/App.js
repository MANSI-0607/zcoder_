
import "./App.css";
import React from "react";
import Home from "./screen/Home";
import Header from "./components/Header";
import AddQuestion from "./screen/AddQuestion";
import Error from "./components/Error";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
}from "react-router-dom"
function App() {
  return (
    <React.Fragment>
     <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home></Home>} />
      {/* <Route path="/explore" component={Explore} /> */}
      <Route path="/addquestion" element={<AddQuestion></AddQuestion>} />
      {/* <Route path="/mystack" component={MyStack} />
      <Route path="/codelive" component={CodeLive} /> */}
       <Route path="*" element={<Error/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  );
}
export default App;

