export const AUTH_CONFIG = {
  domain : process.env.REACT_APP_AUTHO_DOMAIN,
  clientID : process.env.REACT_APP_AUTHO_CLIENTID,
  callbackUrl : 'http://localhost:3000/callback'
}

AUTH_CONFIG.callbackUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://plantios.herokuapp.com/callback';
