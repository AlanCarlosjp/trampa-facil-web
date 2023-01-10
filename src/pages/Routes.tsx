import React from "react";
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import NavBar from "../components/NavBar";
import history from "../utils/history";
import Home from "./Home";
import Perfil from "./Perfil";
import Trabalhos from "./Trabalhos";


const Routes = () => {
    return (
        <Router history={history}>
            <NavBar />
            <Route path="/" component={Home} exact/>
            <Route path="/trabalhos" component={Trabalhos} />
            <Route path="/perfil" component={Perfil} />
        </Router>
    )
}


export default Routes;