import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErorrPage from "../pages/ErorrPage";
import Home from "../pages/Home";

export default function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<ErorrPage/>}/>
      </Routes>
    </>
  );
}
