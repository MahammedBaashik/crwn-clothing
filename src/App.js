import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return(
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;