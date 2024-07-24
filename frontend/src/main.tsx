import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{
  /*
  ! non-null assertion operator
 TypeScript might throw an error if you try to use a potentially null value.
 The ! operator is used here to suppress those errors and to indicate that you 
 have ensured that document.getElementById('root') will not be null.
  */
}
