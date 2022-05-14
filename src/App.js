import "./App.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Modal from "./components/Modal";

function App() {
  const [modalContent, setModalContent] = useState("");
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <>
      {isOpen && <Modal> {modalContent} </Modal>}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
