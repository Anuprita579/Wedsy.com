import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from "./Components/Home"
import SearchBar from "./Components/SearchBar"
import Invitation from './Components/Invitation';
import Error from './Components/Error';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/search",
        element: <SearchBar />
      },
      {
        path: "/card",
        element: <Invitation />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
