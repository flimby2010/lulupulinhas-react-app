import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import QuemSomos from "./pages/quem";
import Produtos from "./pages/produtos";
import Eventos from "./pages/eventos";
import Contato from "./pages/contato";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/quem" element={QuemSomos} />
        <Route path="/produtos" element={Produtos} />
        <Route path="/eventos" element={Eventos} />
        <Route path="/contato" element={Contato} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
