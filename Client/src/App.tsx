import React from 'react';
import './App.css';
import LandingPage from 'pages/landing-page/landingPage';
import AboutPage from 'pages/auth-pages/about/about';
import NotFoundPage from 'pages/page-not-found/NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SignupPage from 'pages/signup/signup-page';
import HomePage from 'pages/auth-pages/home/home';
import ProfilePage from 'pages/auth-pages/profile/profile-page';
import TicketPage from 'pages/auth-pages/tickets/tickets';
import CreateTicketPage from 'pages/auth-pages/create-ticket/create-ticket';
import UsersPage from 'pages/auth-pages/users/users';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/tickets" component={TicketPage} />
          <Route exact path="/create-ticket" component={CreateTicketPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
