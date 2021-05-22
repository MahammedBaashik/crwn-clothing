import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <dev>
    <h1>HATS PAGE</h1>
  </dev>
);

function App() {
  return(
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
