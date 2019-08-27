import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Auth0Provider } from "./react-auth0-wrapper";
import Config from "./auth_config.json";
import './index.css';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState 
        && appState.targetUrl ? appState.targetUrl : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={Config.domain}
        client_id={Config.clientId}
        redirect_uri={Config.redirect_uri}
        onRedirectCallback={onRedirectCallback}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);