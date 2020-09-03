import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/index";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
