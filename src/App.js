import React from "react";
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom";
import Inicio from "./pages/homepage/inicio";
import QuemSomos from "./pages/aboutus/quem";
import Produtos from "./pages/products/produtos";
import Eventos from "./pages/events/eventos";
import Contato from "./pages/contact/contato";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/inicio" />
          <Inicio />
        </Route>
        <Route path="/quem" exact>
          <QuemSomos />
        </Route>
        <Route path="/produtos">
          <Produtos />
        </Route>
        <Route path="/eventos">
          <Eventos />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
