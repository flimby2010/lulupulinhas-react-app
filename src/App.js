import React from "react";
import "./App.css";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import QuemSomos from "./pages/quem";
import Produtos from "./pages/produtos";
import Eventos from "./pages/eventos";
import Contato from "./pages/contato";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact components={Inicio} />
        <Route path="/quem" components={QuemSomos} />
        <Route path="/produtos" components={Produtos} />
        <Route path="/eventos" components={Eventos} />
        <Route path="/contato" components={Contato} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
