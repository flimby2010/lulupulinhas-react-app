import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Inicio from "./pages/inicio";
import QuemSomos from "./pages/quem";
import Produtos from "./pages/produtos";
import Eventos from "./pages/eventos";
import Contato from "./pages/contato";
import Layout from "./components/layout/Layout";

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
