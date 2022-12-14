import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Today } from "./components/Today";
import { Tomorrow } from "./components/Tomorrow";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/tomorrow" element={<Tomorrow />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
