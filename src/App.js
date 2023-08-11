import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";
import "./style.css";
function App() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
