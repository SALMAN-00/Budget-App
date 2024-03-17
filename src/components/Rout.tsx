import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

export default function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </>
  );
}
