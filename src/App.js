import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
