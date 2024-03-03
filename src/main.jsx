import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID

console.log(domain, clientId);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      // redirectUri={window.location.origin}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode >,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { createBrowserAuth0Client } from '@auth0/auth0-spa-js';

// const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
// const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

// const config = {
//   domain,
//   clientId,
//   redirectUri: window.location.origin, // Set the base redirect URI
// };

// // Create Auth0 client instance using createBrowserAuth0Client
// const auth0Client = createBrowserAuth0Client(config);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Auth0Provider {...config} client={auth0Client}>
//       <App />
//     </Auth0Provider>
//   </React.StrictMode>,
// );
