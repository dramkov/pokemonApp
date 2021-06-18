import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import routes, { renderRoutes } from './routers/routers';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <Router>
        <TopBar />
        {renderRoutes(routes)}
      </Router>
    </div>
  );
};

export default App;
