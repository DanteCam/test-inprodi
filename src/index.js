// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./Pages/Home";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./App/Store";
// import "antd/dist/antd.css";
// import "./index.css";

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
