import React from "react";
import ReactDOM from "react-dom/client"; // Make sure to import from 'react-dom/client'
import App from "./App";  // Assuming you have an App component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Create root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
