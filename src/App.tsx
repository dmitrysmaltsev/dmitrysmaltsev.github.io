import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Today } from "./components/Today";
import { Tomorrow } from "./components/Tomorrow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/tomorrow" element={<Tomorrow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
