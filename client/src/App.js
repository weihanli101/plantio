import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAuth0 } from './react-auth0-wrapper';
import NavbarComponent from './components/NavbarComponent';
import ProfileComponent from './components/ProfileComponent'
import PrivateRouteComponent from './components/PrivateRouteComponent';

function App() {
    const { loading } = useAuth0();

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <header>
                    <NavbarComponent />
                </header>
                <Switch>
                    <Route path='/' exact />
                    <PrivateRouteComponent path='/profile' component={ ProfileComponent } />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;