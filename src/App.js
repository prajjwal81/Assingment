import { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import FormOne from "./components/selectaccount/selectaccount";
import "bootstrap/dist/css/bootstrap.min.css";
// import Register from "./components/Register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/register";
import Profile  from "./components/profile/profile";
import CompleteProfile from "./components/completeprofile/com.profile";

function App() {
 
  let [RegisterForm,setRegisterForm]=
  useState(``)
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" exact element={<FormOne />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/complete" element={<Register />} />   
        </Routes>
      </Router>
     
    </Container>
  );
}

export default App;
