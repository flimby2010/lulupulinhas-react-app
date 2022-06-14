import React from "react";
import "./App.css";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import QuemSomos from "./pages/quem";
import Produtos from "./pages/produtos";
import Eventos from "./pages/eventos";
import Contato from "./pages/contato";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Switch>
        <Route path="/" exact components={Home} />
        <Route path="/quem" components={QuemSomos} />
        <Route path="/produtos" components={Produtos} />
        <Route path="/eventos" components={Eventos} />
        <Route path="/contato" components={Contato} />
      </Switch>
      <Products heading="Nossos produtos" data={productData} />
      <Products heading="Últimos eventos" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
