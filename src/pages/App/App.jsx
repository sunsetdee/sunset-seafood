import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      
        <>
          <NavBar user={user} setUser={setUser} />
          {/* we can use exact to replace the <Switch>. <Switch> will ONLY RENDER ONE of the below component/child if the path match, if 
          it doesn't match, it will keep looking at the below child until it finds a matching route. exact will only render the EXACT
          PATH*/}
          <Switch>
            <Route /* exact */  path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route /* exact */ path="/orders">
              <OrderHistoryPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/auth">
              <AuthPage setUser={setUser} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
      
    </main>
  );
}