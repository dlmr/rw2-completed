import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './screens/App';
import Start from './screens/Start';
import Clicker from './screens/Clicker';

export default () => (
    <Route component={ App }>
        <IndexRoute component={ Start } />
        <Route path="clicker" component={ Clicker } />
    </Route>
);
