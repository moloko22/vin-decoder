import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import {ROUTES} from "../../helpers/routes";
import Variables from "../../Pages/Variables/Variables";
import VariableItem from "../../Pages/VariableItem/VariableItem";
import './Main.css';
const Main = () => {

    return (
        <main>
            <Switch>
            <Route exact path={ROUTES.HOME} component={() => <Home/>} />
            <Route exact path={ROUTES.VARIABLES} component={() => <Variables/>} />
            <Route path={ROUTES.VARIABLE} component={() => <VariableItem/>} />
            <Redirect from={ROUTES.UNDEFINED} to={ROUTES.HOME}/>
            </Switch>
        </main>
    );
};

export default Main;