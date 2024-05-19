import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <TransactionsProvider>
    <Auth0Provider
      domain="dev-yakm37nbggjz8t3s.us.auth0.com"
      clientId="RnFEA0yIQESkgiYf3RF4yucMqgm5vSUD"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </TransactionsProvider>,
  document.getElementById("root")
);
