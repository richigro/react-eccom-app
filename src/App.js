import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.componet';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HatsPage}/>  
        <Route path="/hats" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
