import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import components
import Header from './components/Header';

//import Pages
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage'

function App() {
  
  return (
   <>
    <Router>
      <Header />
      <main  >
        <Switch>
          <Route path='/register' component={RegisterPage} />
          <Route path ='/' exact component={HomePage} />
        </Switch>
      </main>
    </Router>
   </>
  );
}

export default App;
