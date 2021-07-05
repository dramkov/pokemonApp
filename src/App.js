import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MemoizedTopBar } from './components/TopBar/TopBar';
import routes, { renderRoutes } from './routers/routers';

const App = () => {
  return (
    <div id='app'>
      <Router>
        <MemoizedTopBar />
        {renderRoutes(routes)}
      </Router>
    </div>
  );
};

export default App;
