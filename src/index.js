import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from './reportWebVitals';


//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//store

import { Provider } from "react-redux";
//reducer
import { store } from "./store";
import { useSelector } from "react-redux";

import { IndexRouters } from "./router";
import { SimpleRouter } from "./router/simple-router";
import { ChatRouter } from "./router/chat-router";

const routerProtected = createBrowserRouter(
  [...IndexRouters, ...ChatRouter],
  { basename: process.env.PUBLIC_URL }
);
const router = createBrowserRouter(
  [...SimpleRouter],
  { basename: process.env.PUBLIC_URL }
);
const ProtectedRouter = () => {
  const isAuthenticated = useSelector((state) => state.user.userInfo);
  return (<RouterProvider router={isAuthenticated ? routerProtected : router}></RouterProvider>)
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App>
        <ProtectedRouter />
      </App>
    </Provider>
  </StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
