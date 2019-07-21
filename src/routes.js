import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Detalhe from './pages/detalhe';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />

            <Route path="/detalhe/:id" component={Detalhe} />
        </Switch>
    </BrowserRouter>
)

export default Routes;