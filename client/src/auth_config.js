export const AuthConfig = {
    domain       : 'dev-cp3sdj1r.auth0.com',
    clientId     : 'hB1IOYYFNMbbMV4MXOrr8hKHn54g76vg',
    redirect_uri : process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://plantios.herokuapp.com/',
};