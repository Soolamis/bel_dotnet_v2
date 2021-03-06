import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Main = React.lazy(() => import('../Main'));
const EditNews = React.lazy(() => import('../news/EditNews'));
const News = React.lazy(() => import('../news/News'));

export default function Router(): React.ReactElement {
    return (
        <Switch>
            <Route path="/news/:id">
                <News />
            </Route>
            <Route path="/editNews/:id">
                <EditNews />
            </Route>
            <Route path="/" exact>
                <Main />
            </Route>
        </Switch>
    );
}
