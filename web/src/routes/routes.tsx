import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/lading/Lading';
import OrphanagesMap from '../pages/orphanagesMap/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/orphanages" component={OrphanagesMap} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
