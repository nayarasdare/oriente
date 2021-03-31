import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../Login';
import LoginAdmin from '../LoginAdmin';
import Cadastro from '../Cadastro';
import Main from '../Main';

import UniformAndEquip from '../UniformAndEquip';
import Categoria from '../Categoria';
import Map from '../Map';

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/loginAdmin" component={LoginAdmin} />
            <Route path="/cadastrar" component={Cadastro} />
            <Route path="/uniformAndEquip" component={UniformAndEquip} />
            <Route path="/categoria" component={Categoria} />
            <Route path="/map" component={Map} />

            <Route path="/" exact component={Main} isPrivate />
        </Switch>
    );
}