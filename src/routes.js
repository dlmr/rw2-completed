import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './screens/App';
import Start from './screens/Start';

export default () => (
    <Route component={ App }>
        <IndexRoute component={ Start } />
    </Route>
);
