import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./component/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/Reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider initialState={initialState} reducer={reducer} >
      <App />
    </DataProvider>
  </StrictMode>
);

// import React from "react";
// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { DataProvider } from "./component/DataProvider/DataProvider";
// import { initialState, reducer } from "./Utility/Reducer.jsx";
// import "./index.css"; // Ensure this imports your global CSS

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <DataProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </DataProvider>
//   </StrictMode>
// );
