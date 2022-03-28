import React from "react";
import { Route, Routes } from "react-router-dom";
import Chapter from "./components/Chapter";
import Cover from "./components/Cover";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/chapter1" element={<Chapter chapter={0} />} />
        <Route path="/chapter2" element={<Chapter chapter={1} />} />
        <Route path="/chapter3" element={<Chapter chapter={2} />} />
        <Route path="/chapter4" element={<Chapter chapter={3} />} />
        <Route path="/chapter5" element={<Chapter chapter={4} />} />
        <Route path="/chapter6" element={<Chapter chapter={5} />} />
        <Route path="/chapter7" element={<Chapter chapter={6} />} />
        <Route path="/chapter8" element={<Chapter chapter={7} />} />
        <Route path="/chapter9" element={<Chapter chapter={8} />} />
        <Route path="/chapter10" element={<Chapter chapter={9} />} />
        <Route path="/chapter11" element={<Chapter chapter={10} />} />
      </Routes>
    </>
  );
};

export default App;
