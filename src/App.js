import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
