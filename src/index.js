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
import Community from './Components/Community';
import Photographer from './Components/Photographer';
import Florist from './Components/Florist';
import Caterers from './Components/Caterers';
import MakeupArtist from './Components/MakeupArtist';
import BridalShop from './Components/BridalShop';
import Dj from './Components/Dj';

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
      },
      {
        path: "/community",
        element: <Community />
      },
      {
        path: "/searchFor/photographer",
        element: <Photographer />
      },
      {
        path: "/searchFor/florist",
        element: <Florist />
      },
      {
        path: "/searchFor/caterers",
        element: <Caterers />
      },
      {
        path: "/searchFor/bridal-shop",
        element: <BridalShop />
      },
      {
        path: "/searchFor/makeup-artist",
        element: <MakeupArtist />
      },
      {
        path: "/searchFor/dj",
        element: <Dj />
      },

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
