import './App.sass';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Home } from './Home';
import { Header } from './Header';
import { Profile } from './Profile';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={600} classNames="fade">
                                <Switch location={location}>
                                    <Route path="/profile">
                                        <Profile />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
            </div>
        </Router>
    );
};

export default App;
