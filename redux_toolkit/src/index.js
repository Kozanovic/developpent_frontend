import React from "react";
import { createRoot } from "react-dom/client"; // Import from react-dom/client
import App from "./App";
import { store } from "./app/store"; // Import the store
import { Provider } from "react-redux"; // Import the Provider

// Use createRoot from react-dom/client
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
