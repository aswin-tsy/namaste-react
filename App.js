import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componets/Header";
import Body from "./src/componets/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/componets/About";
import Error from "./src/componets/Error";
import Contact from "./src/componets/Contact";
import RestaruantMenu from "./src/componets/RestaruantMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restautant/:restId',
        element: <RestaruantMenu/>
      },
    ],
    errorElement: <Error/>
  },
 
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
