export const AUTH_CONFIG = {
  domain : 'dev-kfmjnewm.auth0.com',
  clientID : 'IJSz8uCXHXdJ52EGWUHIqQSXlCDgh7UV',
  callbackUrl : 'http://localhost:3000/callback'
}

AUTH_CONFIG.callbackUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://plantios.herokuapp.com/callback';
