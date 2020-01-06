import './App.sass';
import React from 'react';
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Header } from './Header';
import { Profile } from './Profile';

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
