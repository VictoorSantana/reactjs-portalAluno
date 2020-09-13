import React from 'react';

import RouteLogin from './routes/routeLogin';
import RouteCadastro from './routes/routeCadastro';
import RouteDashboard from './routes/routeDashboard';
import RouteTarefas from './routes/routeTarefas';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Autenticacao from './utils/autenticacao';
import RouteTradeConta from './routes/routeTradeConta';
import RouteNota from './routes/routeNota';
import RouteCompromissos from './routes/routeCompromissos';
import RouteAtividades from './routes/routeAtividades';


import './app.css';


const PrivateRoute = ({ component: Component, ... rest }) => (
  <Route 
  { ... rest}
  render={props => 
      Autenticacao.verificar() ? (
          <Component { ... props} />
      ): (
          <Redirect to={{ pathname: "/", state: { from: props.location } }}/>
      )
  }
  />
);

const Routes = () => (
  <BrowserRouter>
        <Switch>
            <Route exact path="/" component={(props) => <RouteLogin  {...props}></RouteLogin>}></Route>
            <Route exact path="/cadastro" component={(props) => <RouteCadastro  {...props}></RouteCadastro>}></Route>
            
            <PrivateRoute path="/dashboard" component={(props) => <RouteDashboard {...props}></RouteDashboard>}></PrivateRoute>
            <PrivateRoute path="/tarefas" component={(props) => <RouteTarefas {...props}></RouteTarefas>}></PrivateRoute>            



            {/*  Trade bot   */}

            <PrivateRoute path="/portal/notas" component={(props) => <RouteNota {...props}></RouteNota>}></PrivateRoute>
            <PrivateRoute path="/portal/compromissos" component={(props) => <RouteCompromissos {...props}></RouteCompromissos>}></PrivateRoute>
            <PrivateRoute path="/portal/atividades" component={(props) => <RouteAtividades {...props}></RouteAtividades>}></PrivateRoute>



            <PrivateRoute path="/trade/account" component={(props) => <RouteTradeConta {...props}></RouteTradeConta>}></PrivateRoute>
        </Switch>
  </BrowserRouter>
);

export default Routes;