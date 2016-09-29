import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './screens/App';
import Start from './screens/Start';
import Clicker from './screens/Clicker';
import Github from './screens/Github';
import User from './screens/User';

export default () => (
    <Route component={ App }>
        <IndexRoute component={ Start } />
        <Route path="clicker" component={ Clicker } />
        <Route path="github" component={ Github }>
            <Route path="user/:id" component={ User } />
        </Route>
    </Route>
);
