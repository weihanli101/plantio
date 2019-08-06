let backendHost;

const hostname = window && window.location && window.location.hostname;

// Set API endpoints dynamically

switch(hostname) {
    // Testing enviroment
    case 'http://localhost:3000/':
        backendHost = 'http://localhost:1234/'
        break;
    default: 
        backendHost = null;
}

export const API_ROOT = `${backendHost}`;